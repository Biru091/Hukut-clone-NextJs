import data from "@/app/data/product.json";
type PageProps = {
  params: Promise<{
    slug: string;
    id: string;
  }>;
};

export default async function ProductDetail({ params }: PageProps) {
    const { slug,id } = await params
  

    const category = data.categories.find(
  (category) => category.slug === slug
);

if (!category) {
  return <h1>Category Not Found</h1>;
}
const product = category.products.find(
  (product) => product.id === id
);

if (!product) {
  return <h1>Product Not Found</h1>;
}

    return (
        <div>
           <div>
            <h1>{product.name}</h1>
           </div>

        </div>
            
    )

}