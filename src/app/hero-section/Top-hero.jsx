"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TopHero1() {
    const images = [
        "/hero/home1.webp",
        "/hero/home2.webp",
        "/hero/home3.webp",
        "/hero/home4.webp",
        "/hero/home5.webp",
    ];

    return (
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:px-12 py-4">
            <div className="w-full lg:w-2/4 lg:h-[40vh] lg:min-h-[280px]">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop
                    speed={800}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className="w-full h-full transition-all duration-100"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={`Banner ${index + 1}`}
                                width={1200}
                                height={600}
                                priority={index === 0}
                                className="w-full h-full rounded-2xl object-cover px-1.5"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full  lg:w-1/2 flex flex-row lg:h-[40vh] lg:min-h-[280px] px-3 gap-1 lg:justify-between">
                <Image
                    src="/hero/home6.jpg1784537757247"
                    alt="Banner"
                    width={300}
                    height={280}
                    className="w-2/6 h-full rounded-2xl object-cover"
                />

                <Image
                    src="/hero/home7.jpg1784537815856"
                    alt="Banner"
                    width={300}
                    height={280}
                    className="w-2/6 h-full rounded-2xl object-cover"
                />

                <Image
                    src="/hero/home8.jpg1784537775072"
                    alt="Banner"
                    width={300}
                    height={280}
                    className="w-2/6 h-full rounded-2xl object-cover"
                />
            </div>
        </div>
    );
}