import Image from "next/image"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-black text-white text-sm lg:h-auto lg:w-full lg:flex lg:flex-col">
            <div className=" flex flex-col py-10 px-4 leading-relaxed gap-5 lg:flex-row lg:gap-0 lg:py-13 ">
                <div className=" flex flex-col gap-5 lg:flex lg:flex-col lg:flex-1 lg:px-10" >
                    <Link href="/">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo"
                            width={100}
                            height={40}
                            priority
                            className="h-10 w-30 lg:h-12  "
                        />
                    </Link>
                    <p className="w-3/4 text-[12px]">Welcome to Hukut - Nepal emerging gadget store. A place to find the best electronic products for every taste and occasion. Hukut is the home to thousands of electronic products that you can possibly imagine- from trending devices like laptops, tablets, smartphones to in-vogue electronic mainstays like smartwatches, neckbands, and more. Just put in what you are looking for, and you will be sure to find it here. What is more?</p>
                </div>
                <div className="lg:flex lg:flex-col  lg:flex-1 ">
                    <p className=" text-[17px]">About Us</p>
                    <div className="flex flex-col text-[12px] gap-5 py-5">
                        <Link href="/">About Us</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms and Conditions</Link>
                        <Link href="/">Contact Us</Link>
                        <Link href="/">Returns</Link>
                        <Link href="/">Warranty</Link>
                        <Link href="/">FAQ</Link>
                        <Link href="/">Affiliate</Link>
                    </div>
                </div>
                <div className="lg:flex lg:flex-col lg:flex-1">
                    <p className="text-[17px]">Quick Links</p>
                    <div className="flex flex-col text-[12px] gap-5 py-5">
                        <Link href="/">Shopping Cart</Link>
                        <Link href="/">Compare</Link>
                        <Link href="/">Store Pickup</Link>
                    </div>
                </div>
                <div className="lg:flex lg:flex-col lg:flex-1">
                    <p className="text-[17px]">Subscribe</p>
                    <div className="flex flex-row text-[12px] py-5 w-full h-fit ">
                        <input type="email" placeholder="Enter your email" className="bg-white  text-black py-2 px-2 w-3/4  " />
                        <p className="bg-blue-700 text-white self-center py-2 w-1/4  text-center">Subscribe</p>
                    </div>
                </div>

            </div>
            <div className="mx-auto py-7 flex flex-col gap-4 ">
                <p className="text-gray-300 text-center">Copyright © 2026 All Rights Reserved</p>
                <div className="justify-center flex flex-row gap-6">
                    <FaFacebook />
                    <FaInstagram />
                </div>

            </div>

        </div>
    )
}