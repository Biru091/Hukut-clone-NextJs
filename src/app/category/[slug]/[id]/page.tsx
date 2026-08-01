import data from "@/app/data/product.json";
import Image from "next/image";
import Link from "next/link";
import { Share2 } from 'lucide-react';
import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';



type PageProps = {
  params: Promise<{
    slug: string;
    id: string;
  }>;
};
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

const categories = data.categories as Category[];
export default async function ProductDetail({ params }: PageProps) {
  const { slug, id } = await params;

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <h1>Category Not Found</h1>;
  }

  const product = category.products.find((p) => p.id === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  const specifications = [
    { label: "Brand", value: product.brand },
    { label: "Color", value: product.color },
    { label: "Display", value: product.display },
    { label: "Processor", value: product.processor },
    { label: "CPU", value: product.cpu },
    { label: "GPU", value: product.gpu },
    { label: "Camera", value: product.camera },

    {
      label: "Storage Options",
      value: product.storage_options_gb,
    },

    {
      label: "Storage",
      value: product.storage_gb
        ? `${product.storage_gb} GB`
        : undefined,
    },

    {
      label: "RAM",
      value: product.ram_gb && `${product.ram_gb} GB`,
    },

    {
      label: "Battery",
      value:
        product.battery_life_hours
          ? `${product.battery_life_hours} Hours`
          : product.battery_life_days
            ? `${product.battery_life_days} Days`
            : undefined,
    },

    { label: "ANC", value: product.anc ? "Yes" : undefined },
    { label: "Waterproof", value: product.waterproof ? "Yes" : undefined },
    { label: "Water Resistance", value: product.water_resistance },
    { label: "Power", value: product.power_watts && `${product.power_watts} W` },
    { label: "Type", value: product.type },
    { label: "Specs", value: product.specs },
  ];

  return (
    <div>
      <div>
        <div className="flex flex-col w-full py-6 px-5 gap-4">
          <Image src="/products/mobile-phones.webp" alt="Product Image" width={250} height={250} className="mx-auto w-full max-w-lg h-auto p-16  object-cover bg-gray-100" />
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
        <div>
          <div className="flex flex-row justify-between items-center px-3">
            <strong className="text-blue-600 font-bold">{product.brand}</strong>
            <div className="flex flex-row gap-2 items-center text-sm px-2">
              <p>Be the first one to review</p>
              <Share2 height={15} width={15} />
              <Heart height={15} width={15} />
            </div>
          </div>
          <div className="flex flex-col gap-4 px-3 py-2">
            <strong className="text-xl leading-tight font-bold">{product.name}</strong>
            <p className="text-[11px] text-gray-600  leading-tight font-bold bg-gray-200 w-fit px-2">Best Seller #1 in <span className=" text-blue-600">{category.name}</span></p>
            <strong className="text-2xl font-bold ">${product.price.toFixed(2)}</strong>
            {product.color && (
              <p className="px-2">
                <strong>Color:</strong> {product.color}
              </p>
            )}

          </div>
          <div className="mt-6 space-y-2 grid grid-cols-2 gap-4 px-3 py-2">
            {specifications.map(
              (spec) =>
                spec.value && (
                  <div
                    key={spec.label}
                  >
                    <p>{spec.label}</p>
                    <p>{spec.value}</p>
                  </div>
                )
            )}
          </div>
        </div>

        <div>
          <div>
            <p>Product By {product.brand}</p>
            <p>{product.rating}⭐</p>
            <div>
              <p>Genioun Product</p>
              <p>Official Warranty</p>
              <p>Global Brand</p>
              <p>COD Available</p>

            </div>
          </div>



        </div>

      </div>

    </div>

  )

}