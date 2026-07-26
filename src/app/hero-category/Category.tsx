import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "mobile-phones",
    image: "/category/mobile.webp1775718139858",
  },
  {
    name: "laptops",
    image: "/category/laptop.webp1775718172051",
  },
  {
    name: "tablets",
    image: "/category/ipad.webp1775718241518",
  },
  {
    name: "speakers",
    image: "/category/speaker.webp1775823789713",
  },
  {
    name: "smartwatches",
    image: "/category/smartwatch.png1775718086394",
  },
  {
    name: "earbuds",
    image: "/category/earbud.png1775718051763",
  },
  {
    name: "drone",
    image: "/category/drone.png1775718274362",
  },
  {
    name: "playsation",
    image: "/category/playstation.webp",
  },
  {
    name: "pc-components",
    image: "/category/pc_component.webp1775823883124",
  },
  {
    name: "monitor",
    image: "/category/monitor.png1775823932460",
  },
  {
    name: "pc-build",
    image: "/category/pc-build.png1775823961540",
  },
  {
    name: "accessories",
    image: "/category/pc-acc.png1775824048696",
  },
];

export default function Hero_Category() {
  return (
    <section className="lg:px-12 lg:py-7">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Shop by Category
        </h2>

        <div className="flex items-center gap-2">
          <ChevronLeft className="hidden lg:block w-8 h-8 rounded-full border border-gray-300 p-1 opacity-70 cursor-pointer" />
          <ChevronRight className="hidden lg:block w-8 h-8 rounded-full border border-gray-300 p-1 opacity-70 cursor-pointer" />

          <Link
            href=""
            className="text-blue-700 underline"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 w-max">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={`/category/${item.name}`}
              className="flex flex-col items-center shrink-0 w-[130px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={130}
                height={90}
                className="w-[130px] h-[90px] object-contain rounded-2xl bg-gradient-to-b from-[#E5EBFF] via-[#EAF0FF] to-white"
              />

              <p className="mt-2 text-center text-sm min-h-10">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}