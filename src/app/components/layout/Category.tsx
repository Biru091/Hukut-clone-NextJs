import { Menu, Cpu, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Category() {
    return (
        <div className="flex items-center h-12 lg:h-14 bg-blue-800 text-white text-[15px] lg:px-3 lg:px-10">
            <div className="group/category relative shrink-0">
                <button className=" hidden lg:flex h-full items-center gap-2">
                    <Menu className="h-5 w-5" />
                    <span className="hidden sm:inline">All Categories</span>
                </button>

                <div className="absolute left-0 top-full mt-1 w-64 bg-white text-black shadow-lg z-50 opacity-0 invisible transition-all duration-200 group-hover/category:opacity-100 group-hover/category:visible">
                    <div className="flex flex-col gap-5 p-4">
                        <div className="relative group/item flex items-center justify-between">
                            <Link
                                href="/category/mobile-phones"
                                className="transition-all duration-200 hover:pl-2"
                            >
                                Mobile Phones
                            </Link>

                            <ChevronRight size={18} />

                            <div className="hidden lg:flex absolute left-full top-0 bg-white shadow-lg opacity-0 invisible transition-all duration-200 group-hover/item:opacity-100 group-hover/item:visible">
                                <div className="flex">
                                    <div className="flex flex-col gap-5 p-5 min-w-[180px]">
                                        <h2 className="font-semibold">Brand</h2>

                                        <Link href="#">Realme</Link>
                                        <Link href="#">Apple</Link>
                                        <Link href="#">Oppo</Link>
                                        <Link href="#">Poco</Link>
                                        <Link href="#">Xiaomi</Link>
                                        <Link href="#">Honor</Link>
                                        <Link href="#">OnePlus</Link>
                                        <Link href="#">Samsung</Link>
                                    </div>

                                    <div className="flex flex-col gap-5 p-5 whitespace-nowrap">
                                        <h2 className="font-semibold">
                                            Shop By Budget
                                        </h2>

                                        <Link href="#">Phones under 20,000</Link>
                                        <Link href="#">Phones under 25,000</Link>
                                        <Link href="#">Phones under 30,000</Link>
                                        <Link href="#">Phones under 35,000</Link>
                                        <Link href="#">Phones under 40,000</Link>
                                        <Link href="#">Phones under 45,000</Link>
                                        <Link href="#">Phones under 50,000</Link>
                                        <Link href="#">Phones under 55,000</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/laptops">Laptops</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/earbuds">Earbuds</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/tablets">Tablets</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/speakers">Speakers</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/smartwatches">Smartwatches</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/pc-build">PC Build</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/pc-components">PC Components</Link>
                            <ChevronRight size={18} />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/category/accessories">Accessories</Link>
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-4 flex-1 overflow-x-auto hide-scrollbar">
                <div className="flex items-center gap-6 whitespace-nowrap w-max h-full">
                    <button className="flex items-center gap-2 bg-amber-400 text-black rounded h-9 px-3 shrink-0">
                        <Cpu className="h-4 w-4" />
                        <span>Build Your PC</span>
                        <span className="bg-yellow-300 text-[10px] px-1 rounded">
                            New
                        </span>
                    </button>

                    <Link href="/category/mobile-phones">Mobile Phones</Link>
                    <Link href="/category/laptops">Laptops</Link>
                    <Link href="/category/earbuds">Earbuds</Link>
                    <Link href="/category/tablets">Tablets</Link>
                    <Link href="/category/speakers">Speakers</Link>
                    <Link href="/category/smartwatches">Smartwatches</Link>
                    <Link href="/category/pc-build">PC Build</Link>
                    <Link href="/category/pc-components">PC Components</Link>
                    <Link href="/category/gaming">Gaming</Link>
                    <Link href="/category/accessories">Accessories</Link>
                </div>
            </div>
        </div>
    );
}