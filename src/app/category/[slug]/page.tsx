import data from "@/app/data/product.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Zap } from 'lucide-react';
import { ChevronRight } from 'lucide-react';


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
            <div className="flex flex-row items-center px-9 py-5 text-[12px] gap-2 ">
                <Link href='/' className="opacity-75">Home</Link>
                <p ><ChevronRight width={10} height={10} className="opacity-70 h-auto" /></p>
                <p className="opacity-60">{category.name}</p>
            </div>
            <div className="px-3.5">
                <Image src={`/banner/${slug}.png`} alt="" width={900} height={200} className="w-full h-auto" />
                <p className="font-bold text-lg py-2.5">Shop Best {`${category.name}`}</p>
                <p className="text-xs font-semibold leading-none opacity-70">Shop top tech by your price range</p>
            </div>
            <div className="flex gap-3 p-3.5 text-nowrap overflow-x-auto hide-scrollbar">
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">Flagship {`${category.name}`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 2 lakh`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 1 lakh`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 90000`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 70000 lakh`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 60000`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 50000`}</Link>
                <Link href="#" className="text-xs font-semibold opacity-60 bg-sky-50  shadow-sm p-1">{`${category.name} under 40000`}</Link>


            </div>
            <div className="flex flex-row  overflow-x-auto  gap-5 p-3.5 hide-scrollbar">
                {category.products.map((product) => (
                    <div key={product.id} className="w-52 shrink-0 bg-sky-50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl  ">
                        <Link href={`/category/${slug}/${product.id}`}>

                            <p className="text-[11px] text-right p-1.5">⭐{product.rating}</p>

                            <Image src={`/products/${slug}.webp`} alt="" height={350} width={350} className=" w-full h-auto " />
                            <div className="flex flex-col text-left  bg-white px-3 py-4 text-nowrap">
                                <p className="text-sm font-semibold px-1 opacity-75">{product.name}</p>
                                <p className="text-base font-bold px-1">Rs {product.price}</p>
                                <p className="text-[10px] bg-blue-800 text-white w-fit  h-auto rounded-2xl m-1 p-1 flex flex-row gap-1 "><Zap height={12} width={12} className="" /> Get in same day</p>
                            </div>


                        </Link>
                    </div>

                ))}



            </div>



        </div>
    );
}