"use client";
import Image from "next/image";
import { Share2 } from 'lucide-react';
import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { Globe } from 'lucide-react';
import { TruckElectric } from 'lucide-react';
import { Handbag } from 'lucide-react';
import { Truck } from 'lucide-react';
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { useCart } from "@/app/lib/cartContext";

import {
    Palette,
    Monitor,
    Cpu,
    Microchip,
    Camera,
    HardDrive,
    MemoryStick,
    Battery,
    ShieldCheck,
    Droplets,
    Zap,
    Tag,
    Info,
    Building2,
} from "lucide-react";




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
export interface Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}
type Props = {
    product: Product;
    category: Category;
};

export default function ProductDetailClient({ product, category, }: Props) {
    const { addToCart } = useCart();

    const specifications = [
        { label: "Brand", icon: Building2, value: product.brand },
        { label: "Color", icon: Palette, value: product.color },
        { label: "Display", icon: Monitor, value: product.display },
        { label: "Processor", icon: Cpu, value: product.processor },
        { label: "CPU", icon: Cpu, value: product.cpu },
        { label: "GPU", icon: Microchip, value: product.gpu },
        { label: "Camera", icon: Camera, value: product.camera },

        {
            label: "Storage Options",
            icon: HardDrive,
            value: product.storage_options_gb?.join(", ") + " GB",
        },

        {
            label: "Storage",
            icon: HardDrive,
            value: product.storage_gb
                ? `${product.storage_gb} GB`
                : undefined,
        },

        {
            label: "RAM",
            icon: MemoryStick,
            value: product.ram_gb
                ? `${product.ram_gb} GB`
                : undefined,
        },

        {
            label: "Battery",
            icon: Battery,
            value: product.battery_life_hours
                ? `${product.battery_life_hours} Hours`
                : product.battery_life_days
                    ? `${product.battery_life_days} Days`
                    : undefined,
        },

        {
            label: "ANC",
            icon: ShieldCheck,
            value: product.anc ? "Yes" : undefined,
        },

        {
            label: "Waterproof",
            icon: Droplets,
            value: product.waterproof ? "Yes" : undefined,
        },

        {
            label: "Water Resistance",
            icon: Droplets,
            value: product.water_resistance,
        },

        {
            label: "Power",
            icon: Zap,
            value: product.power_watts
                ? `${product.power_watts} W`
                : undefined,
        },

        {
            label: "Type",
            icon: Tag,
            value: product.type,
        },

        {
            label: "Specs",
            icon: Info,
            value: product.specs,
        },
    ];
    return (
        <div>
            <div className="flex flex-row items-center px-9 py-5 text-[12px] gap-2 ">
                <Link href='/' className="opacity-75">Home</Link>
                <p ><ChevronRight width={10} height={10} className="opacity-70 h-auto" /></p>
                <p className="opacity-60">{category.name}</p>
                <p ><ChevronRight width={10} height={10} className="opacity-70 h-auto" /></p>
                <p className="opacity-60">{product.brand}</p>
                <p ><ChevronRight width={10} height={10} className="opacity-70 h-auto" /></p>
                <p className="opacity-60">{product.name}</p>

            </div>
            <div className="lg:flex lg:flex-row">
                <div className="flex flex-col w-full py-6 px-5 gap-4 lg:flex-1 lg:py-1 ">
                    <Image src="/products/mobile-phones.webp" alt="Product Image" width={250} height={250} className="mx-auto w-full max-w-lg h-auto p-16  object-cover bg-gray-100 lg:w-90 lg:h-75 lg:max-w-lg" />
                    <div className="flex flex-row justify-between items-center py-3 border-b border-t border-gray-300 ">
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" />
                            <p>Compare</p>

                        </div>
                        <div className="flex flex-row gap-2">
                            <MapPin />
                            <p>Connect to store</p>
                        </div>


                    </div>
                </div>
                <div className="lg:flex lg:flex-col lg:flex-1 lg:gap-4">
                    <div className="flex flex-row justify-between items-center px-3">
                        <strong className="text-blue-600 font-bold">{product.brand}</strong>
                        <div className="flex flex-row gap-2 items-center text-sm px-2">
                            <p>Be the first one to review</p>
                            <Share2 height={15} width={15} />
                            <Heart height={15} width={15} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-2">
                        <strong className="text-xl leading-tight font-bold">{product.name}</strong>
                        <p className="text-[11px] text-gray-600  leading-tight font-bold bg-gray-200 w-fit px-2">Best Seller #1 in <span className=" text-blue-600">{category.name}</span></p>
                        <strong className="text-2xl font-bold ">$ {product.price.toFixed(2)}</strong>
                        {product.color && (
                            <p className="px-2">
                                <strong>Color:</strong> {product.color}
                            </p>
                        )}

                        {product.storage_options_gb && (
                            <div className="py-1">
                                <p className="font-bold">Varient</p>
                                <div className="flex flex-row gap-3 py-1">
                                    {product.storage_options_gb.map((varient) => (
                                        <p key={varient} className="w-fit h-fit p-1 rounded-2xl border border-gray-300" >{varient}GB</p>

                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-row justify-between items-center px-1 py-1 ">
                            <p className="font-bold text-2xl leading-tight">Highlights</p>
                            <p className="text-blue-600 font-semibold text-sm leading-tight flex flex-row items-center">Read Full Specs <span><ArrowRight height={15} width={20} /></span></p>
                        </div>
                        <div className="mt-2 grid grid-cols-2  gap-1">
                            {specifications.map((spec) => {
                                if (!spec.value) return null;

                                const Icon = spec.icon;

                                return (
                                    <div
                                        key={spec.label}
                                        className="flex items-center gap-1 "
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center">
                                            <Icon size={20} />
                                        </div>

                                        <div>
                                            <p className="text-[13px] text-gray-500">{spec.label}</p>
                                            <p className="font-semibold text-[13px] text-gray-900 ">{spec.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>

                <div className="lg:flex lg:flex-col lg:flex-1 lg:gap-4 lg:px-5  ">
                    <div className="lg:border lg:border-gray-300 lg:rounded-lg lg:text-sm">
                        <div className="hidden lg:block lg:px-6 lg:py-3">
                            <p >Product by <span className="font-bold text-blue-800">{product.brand}</span></p>
                            <p className="bg-yellow-600 w-fit h-fit py-1 px-2 border-none rounded-2xl text-white">{product.rating} ⭐</p>
                        </div>
                        <div className="flex flex-row  justify-around items-center px-3 py-4  text-[9px] lg:grid lg:grid-cols-2 lg:gap-5 lg:text-[12px] lg:justify-between lg:items-center lg:px-7 lg:py-3   ">
                            <div className="lg:flex lg:flex-row lg:gap-2" >
                                <BadgeCheck className="mx-auto text-blue-700 lg:mx-0 " />
                                <p>Genioun Product</p>
                            </div>
                            <div className="lg:flex lg:flex-row lg:gap-2">
                                <Handshake className="mx-auto text-fuchsia-900 lg:mx-0" />
                                <p>Official Warranty</p>
                            </div>
                            <div className="lg:flex lg:flex-row lg:gap-2">
                                <Globe className="mx-auto text-green-700 lg:mx-0" />
                                <p>Global Brand</p>
                            </div>
                            <div className="lg:flex lg:flex-row lg:gap-2">
                                <TruckElectric className="mx-auto text-purple-700 lg:mx-0" />
                                <p>COD Available</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col px-3 py-2 gap-5 pb-20">
                        <p className="font-semibold text-base " >Delivery Option</p>
                        <div className="flex flex-row items-stretch justify-between gap-2 ">
                            <div className="flex flex-col gap-3 flex-1 border-2 border-blue-800 p-4 rounded-lg bg-gradient-to-b from-blue-100 to-white">
                                <div className="flex flex-row gap-2  ">
                                    <Handbag className="text-blue-800" />
                                    <p className="font-semibold">Pickup</p>
                                </div>
                                <p className="text-[12px]">Available Today at Hukut Store</p>
                                <Link href="#"><p className="text-[13px] text-blue-800 font-bold">See pickup locations</p></Link>
                            </div>
                            <div className="flex flex-col gap-3 flex-1 border border-gray-700 p-4 rounded-lg bg-gradient-to-b from-blue-100 to-white">
                                <div className="flex flex-row gap-2 ">
                                    <Truck className="text-blue-800" />
                                    <p className="font-semibold">Free Delivery</p>
                                </div>
                                <p className="text-[13px] font-bold text-blue-800">Get it in tommorow</p>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto gap-2 items-center justify-center px-3 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-2 lg:static">
                            <button onClick={()=>addToCart(product.id)} className="bg-blue-700 text-white py-2 px-2 rounded-lg hover:bg-blue-900 transition-colors w-full h-auto text-center lg:cursor-pointer ">
                                Buy Now
                            </button>
                        </div>
                    </div>



                </div>

            </div>

        </div>

    )

}