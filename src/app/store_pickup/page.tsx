import { ChevronLeft } from 'lucide-react';
import { SquareCheckBig } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function store_Pickup() {
    return (
        <div className='h-screen w-full bg-gray-100'>
            <div className="flex flex-col w-full h-auto py-2 px-5 bg-gray-100 lg:w-fit lg:mx-auto ">
                <div className='flex flex-row items-center gap-3 py-4'>
                    <ChevronLeft height={23} width={26} />
                    <p className='font-semibold text-2xl'>Our Stores Location</p>
                </div>
                <div className='lg:flex flex-row bg-white gap-14'>
                    <div className='flex flex-col py-8 px-5  text-sm gap-5 justify-center'>
                        <div className='flex flex-row gap-2 text-blue-800 font-bold text-lg leading-tight'>
                            <SquareCheckBig height={18} width={18} />
                            <p className='leading-tight'>Hukut Store Newroad</p>
                        </div>
                        <p className='text-[13px]'>An online and retail based store specializing in Mobile Phones and Accessories</p>

                        <div className='flex flex-row gap-2 leading-tight'>
                            <MapPin height={18} width={18} />
                            <p>Opposite to Krishi Bikash Bank, New Road, Kathmandu 44600</p>
                        </div>
                        <div className='flex flex-row gap-2   leading-tight'>
                            <Clock height={18} width={18} />
                            <p>Opens 10AM - 7PM</p>
                        </div>
                        <div className='flex flex-row gap-2 leading-tight'>
                            <Phone height={18} width={18} />
                            <p>9801100037 / 9801100035</p>

                        </div>
                        <div className='flex flex-row gap-2 leading-tight text-blue-800 font-bold '>
                            <MapPin height={18} width={18} />
                            <p>Find us on Google map</p>
                        </div>
                        <div className='flex flex-row w-full h-auto flex-wrap gap-3'>
                            <div className='flex flex-row gap-3'>
                                <Check height={14} width={14} color='blue' />
                                In-store shopping
                            </div>
                            <div className='flex flex-row gap-3'>
                                <Check height={14} width={14} color='blue' />
                                Delivery
                            </div>
                            <div className='flex flex-row gap-3'>
                                <Check height={14} width={14} color='blue' />
                                In-store pickup
                            </div>
                            <p className='font-bold w-full h-auto bg-blue-800 text-white px-5 py-3 rounded-2xl text-center '>✓ Selected for Pickup</p>

                        </div>


                    </div>
                    <div className="lg:w-1/3  lg:px-5 lg:py-8 lg:self-center">
                        <Image
                            src="/shopimage/shop.webp"
                            alt="shopimage"
                            width={200}
                            height={200}
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}