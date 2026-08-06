"use client";

import { useCart } from "@/app/lib/cartContext";
import data from "@/app/data/product.json";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
    currency: string;
    in_stock: boolean;

    image: {
        url: string;
        background: string;
        alt_text: string;
    };

    color?: string;
    storage_options_gb?: number[];
    storage_gb?: number;
    ram_gb?: number;
    display?: string;
    processor?: string;
    cpu?: string;
    gpu?: string;
    camera?: string;
    battery_life_hours?: number;
    battery_life_days?: number;
    type?: string;
    specs?: string;
    anc?: boolean;
    waterproof?: boolean;
    water_resistance?: string;
    power_watts?: number;
}

export default function CartClient() {
    const { removeFromCart } = useCart();

    const { cart } = useCart();
    const [hydrated, setHydrated] = useState(false);
    function hydration() {

    }

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    const cartProducts = cart
        .map((cartItem) => {
            const product = data.categories
                .flatMap((category) => category.products as Product[])
                .find((product) => product.id === cartItem.productId);

            if (!product) return null;

            return {
                ...product,
                quantity: cartItem.quantity,
            };
        })
        .filter(
            (product): product is Product & { quantity: number } =>
                product !== null
        );

    return (
  <div className="max-w-6xl mx-auto px-4 py-6">
    <h1 className="text-2xl font-bold mb-6">
      Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
    </h1>

    <div className="space-y-5">
      {cartProducts.map((product) => {
        const specifications = [
          { label: "Brand", value: product.brand },
          { label: "Color", value: product.color },
          { label: "Display", value: product.display },
          { label: "Processor", value: product.processor ?? product.cpu },
          { label: "GPU", value: product.gpu },
          { label: "Camera", value: product.camera },
          {
            label: "Storage",
            value: product.storage_options_gb
              ? `${product.storage_options_gb.join(", ")} GB`
              : product.storage_gb
              ? `${product.storage_gb} GB`
              : undefined,
          },
          {
            label: "RAM",
            value: product.ram_gb
              ? `${product.ram_gb} GB`
              : undefined,
          },
          {
            label: "Battery",
            value: product.battery_life_hours
              ? `${product.battery_life_hours} Hours`
              : product.battery_life_days
              ? `${product.battery_life_days} Days`
              : undefined,
          },
          {
            label: "ANC",
            value: product.anc ? "Yes" : undefined,
          },
          {
            label: "Waterproof",
            value: product.waterproof ? "Yes" : undefined,
          },
          {
            label: "Water Resistance",
            value: product.water_resistance,
          },
          {
            label: "Power",
            value: product.power_watts
              ? `${product.power_watts} W`
              : undefined,
          },
          {
            label: "Type",
            value: product.type,
          },
          {
            label: "Specs",
            value: product.specs,
          },
        ];

        return (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col  md:flex-row gap-6"
          >
            <div className="flex justify-center md:w-48 ">
              <Image
                src="/products/mobile-phones.webp"
                alt={product.name}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <div className="flex-1 ">
                <div className="flex flex-row justify-between">
                 <p className="text-blue-600 text-sm font-medium">
                   {product.brand}
                   </p>
                   <button className="bg-red-700 px-2 py-1 text-sm border-none text-white rounded-2xl cursor-pointer" onClick={()=>removeFromCart(product.id)} >Remove</button>
              </div>

              <h2 className="text-xl font-semibold mt-1">
                {product.name}
              </h2>

              <p className="text-2xl font-bold text-blue-700 mt-3">
                {product.currency} {product.price}
              </p>

              <div className="mt-2">
                <span className="font-medium">Quantity:</span>{" "}
                {product.quantity}
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-5 text-sm">
                {specifications.map(
                  (spec) =>
                    spec.value && (
                      <div key={spec.label}>
                        <span className="font-semibold text-gray-700">
                          {spec.label}:
                        </span>{" "}
                        <span className="text-gray-600">
                          {spec.value}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}