import Image from "next/image";
import Link from "next/link";
import { Menu } from 'lucide-react';


import { House, UserRound, ShoppingCart,  } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="px-3 lg:flex items-center justify-between bg-blue-800 lg:px-6 py-3 text-white border-b border-white/20">
            <div className="flex flex-1 items-center gap-5">
                <Menu className="h-11 w-11 lg:hidden" />
                <Link href="/">
                    <Image

                        src="/images/logo.webp"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                        className="h-10 w-40 lg:h-12 lg:w-32"
                    />
                </Link>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full max-w-2xl rounded-md bg-white px-4 py-2 text-black font-light outline-none"
                />
            </div>

            <div className="hidden  lg:ml-6 lg:flex items-center gap-6">
             <Link href="/store_pickup"> 
                <div className="flex items-center gap-2 cursor-pointer">
                    <House className="h-6 w-6" />

                    <div className=" leading-tight">
                        <p className="text-[11px]">Pickup Location</p>
                        <p className="text-[10px] opacity-70">Choose Loc. or delivery</p>
                    </div>
                </div>
              </Link> 
                <div className="h-8 w-px bg-white/30"></div>

                <div className="   lg:flex items-center gap-2 cursor-pointer">
                    <UserRound className="h-6 w-6" />

                    <div className=" lg:block leading-tight">
                        <p className="text-[11px]">Sign In</p>
                        <p className="opacity-90 text-[10px]">For FREE Shipping</p>
                    </div>
                </div>
                <div className=" flex items-center gap-2 cursor-pointer">
                    <ShoppingCart className="h-6 w-6 relative"  />
                    <h1 className="top-4 right-17 bg-red-600 text-white px-1 py-1 text-[7px] rounded-4xl absolute"></h1>
                    <Link href="/cart">
                        <p className="text-[11px]">My Cart</p>

                    </Link>

                </div>
            </div>
        </nav>
    );
}