import { Menu } from 'lucide-react';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Category() {
    return (
        <div className="hidden lg:flex items-center bg-blue-800 text-white text-[15px] px-10 ">
            <button className="flex items-center gap-2 shrink-0">
                <Menu className="h-5 w-5" />
                All Categories
            </button>

            <div className="ml-8 flex-1 overflow-x-auto hide-scrollbar">
                <div className="flex w-max items-center gap-9 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 bg-amber-400 p-2 shrink-0">
                        <Cpu className="h-5 w-5" />
                        Build Your PC
                        <span className="bg-amber-300 px-1 text-[10px]">New</span>
                    </button>

                    <Link href="#">Mobile Phones</Link>
                    <Link href="#">Laptops</Link>
                    <Link href="#">Earbuds</Link>
                    <Link href="#">Tablets</Link>
                    <Link href="#">Speakers</Link>
                    <Link href="#">Smartwatches</Link>
                    <Link href="#">PC Build</Link>
                    <Link href="#">PC Components</Link>
                    <Link href="#">Gaming</Link>
                    <Link href="#">Accessories</Link>
                </div>
            </div>
        </div>
    )
}