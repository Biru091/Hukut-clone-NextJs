import { Menu, Cpu, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Category() {
    return (
        <div className="hidden lg:flex items-center bg-blue-800 text-white text-[15px] px-10">
            <div className="group/category relative">
                <button className="flex items-center gap-2 shrink-0 h-full">
                    <Menu className="h-5 w-5" />
                    All Categories
                </button>

                <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black shadow-lg z-50 opacity-0 invisible transition-all duration-200 group-hover/category:opacity-100 group-hover/category:visible">
                    <div className="p-4 flex flex-col gap-6">
                        <div className="relative group/item flex justify-between items-center hover:opacity-100">
                            <Link href="#"  className="hover:px-2 transition-all duration-200">Mobile Phones</Link>
                            <ChevronRight />

                            <div className="absolute left-full top-0 w-fit bg-white shadow-lg opacity-0  transition-all duration-200 group-hover/item:opacity-100  px-6">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col p-4 gap-6 bg-white ">
                                        <h2 className="font-semibold">Brand</h2>
                                        <Link href="#" className="hover:text-blue-800">Realme</Link>
                                        <Link href="#" className="hover:text-blue-800" >Apple</Link>
                                        <Link href="#" className="hover:text-blue-800">Oppo</Link>
                                        <Link href="#" className="hover:text-blue-800">Poco</Link>
                                        <Link href="#" className="hover:text-blue-800">Xiaomi</Link>
                                        <Link href="#" className="hover:text-blue-800">Honor</Link>
                                        <Link href="#" className="hover:text-blue-800">One Plus</Link>
                                        <Link href="#" className="hover:text-blue-800">Samsung</Link>
                                    </div>
                                    <div className="flex flex-col p-4 gap-6 text-nowrap w-fit ">
                                        <h2 className="font-semibold">Shop By Budget</h2>
                                        <Link href="#" className="hover:text-blue-800">Phones under 20000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 25000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 30000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 35000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 40000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 45000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 50000</Link>
                                        <Link href="#" className="hover:text-blue-800">Phones under 55000</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="/category/laptops" className="hover:px-2 transition-all duration-200">Laptops</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">Earbuds</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">Tablets</Link>
                            <ChevronRight />
                        </div> 

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">Speakers</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">Smartwatches</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">PC Build</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">PC Components</Link>
                            <ChevronRight />
                        </div>

                        <div className="flex justify-between items-center hover:opacity-60">
                            <Link href="#" className="hover:px-2 transition-all duration-200">Accessories</Link>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-8 flex-1 overflow-x-auto hide-scrollbar">
                <div className="flex w-max items-center gap-9 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 bg-amber-400 p-2 shrink-0">
                        <Cpu className="h-5 w-5" />
                        Build Your PC
                        <span className="bg-amber-300 px-1 text-[10px]">New</span>
                    </button>

                    <Link href="/category/mobile-phones">Mobile Phones</Link>
                    <Link href="/category/laptops">Laptops</Link>
                    <Link href="/category/earbuds">Earbuds</Link>
                    <Link href="/category/tablets">Tablets</Link>
                    <Link href="/category/speakers">Speakers</Link>
                    <Link href="/category/smartwatches">Smartwatches</Link>
                    <Link href="/category/pc-build">PC Build</Link>
                    <Link href="/category/pc-build">PC Components</Link>
                    <Link href="/category/gaming">Gaming</Link>
                    <Link href="/category/accessories">Accessories</Link>
                </div>
            </div>
        </div>
    );
}