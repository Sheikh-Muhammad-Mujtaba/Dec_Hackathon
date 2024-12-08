import React from 'react'
import { Button } from '../ui/button'
import Image from "next/image";
import Banner from './Banner';

function Hero() {
    return (
        <>
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between w-full max-w-[1440px] min-h-[663px] bg-[#F2F0F1] overflow-hidden'>
            <div className='flex flex-col gap-[20px] md:gap-[32px] px-[16px] md:px-0 md:ml-[100px] mt-[40px] lg:mt-[103px]'>
                <h1 className="min-w-[315px] max-w-[577px] text-[36px] lg:text-[64px] font-extrabold tracking-tighter leading-[34px] lg:leading-[64px] flex items-center">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="min-w-[328px] max-w-[545px] font-normal text-[16px] leading-[22px] text-[rgba(0,_0,_0,_0.6)]">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <Button className='w-full md:w-[210px] h-[52px] text-[16px] font-medium rounded-full'>
                    Shop Now
                </Button>
                {/* content for small screens */}
                <div className='flex md:hidden flex-col gap-3 justify-center items-center'>
                    <div className='flex gap-[55px]'>
                        <div>
                            <h1 className='text-[24px] font-bold'>
                                200+
                            </h1>
                            <p className='text-[12px] font-normal leading-[22px] text-[rgba(0,_0,_0,_0.6)]'>
                                International Brands
                            </p>
                        </div>
                        {/* line */}
                        <svg width="2" height="52" viewBox="0 0 2 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="-2.18557e-08" x2="1" y2="52" stroke="black" stroke-opacity="0.1" />
                        </svg>
                        <div>
                            <h1 className='text-[24px] font-bold'>
                                2,000+
                            </h1>
                            <p className='text-[12px] font-normal leading-[22px] text-[rgba(0,_0,_0,_0.6)]'>
                                High-Quality Products                        </p>
                        </div>

                    </div>
                    <div>
                            <h1 className='text-[24px] font-bold'>
                                30,000+
                            </h1>
                            <p className='text-[12px] font-normal leading-[22px] text-[rgba(0,_0,_0,_0.6)]'>
                            Happy Customers
                            </p>
                        </div>
                </div>
            </div>

            <Image src={"/Hero/model.png"} alt='Models' width={500} height={500}
                className='relative left-[-15px] sm:static min-w-[600px] lg:w-[650px] min-h-[448px] md:h-[663px]' >

            </Image>
        </div>
        <Banner />
        </>
    )
}

export default Hero