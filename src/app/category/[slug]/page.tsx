import data from "@/app/data/product.json";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;

    const category = data.categories.find(
        (item) => item.slug === slug
    );

    if (!category) {
        notFound();
    }

    return (
        <div >
            <h1 >
                {category.name}
            </h1>

            <p>
                {category.description}
            </p>

            <div >
                {category.products.map((product) => (
                    <div
                        key={product.id}

                    >


                        <h2 >
                            {product.name}
                        </h2>

                        <p >
                            {product.brand}
                        </p>

                        <p >
                            {product.currency} {product.price}
                        </p>

                        <p>⭐ {product.rating}</p>


                    </div>
                ))}
            </div>
        </div>
    );
}