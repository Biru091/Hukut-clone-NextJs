import data from "@/app/data/product.json";
import ProductDetailClient from "./productdetail";





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
  

  return (
     <ProductDetailClient
      product={product}
      category={category}
    />
    
  )

}