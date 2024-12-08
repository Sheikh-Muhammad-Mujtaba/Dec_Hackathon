import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { ChevronDown, ChevronRight, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from "next/image";
import TabNavigation from './components/TabNavigation';
import Reviews from "./components/reviews/Reviews";
import Suggestions from './components/Suggestion/Suggestions';


function page() {
    return (
        <div className='w-full mt-6 flex flex-col justify-center items-center'>
            <Breadcrumb className='mx-[16px] md:mx-[100px] w-[81.25vw]'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Men</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>T-shirts</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* product detail */}
            <div className='flex flex-col lg:flex-row items-center justify-center px-[16px] gap-[12px] md:gap-[14px] mt-[20px] md:mt-[36px]'>
                <div className='flex flex-col-reverse lg:flex-row gap-[12px] md:gap-[14px]'>
                    <div className='flex flex-row lg:flex-col items-center justify-center gap-[12px] md:gap-[14px]'>
                        <Image src={"/product-detail/img1.png"} alt='One Life Graphic T-shirt' width={170} height={138} className='w-[111px] lg:w-[152px] h-[106px] lg:h-[167px]' />
                        <Image src={"/product-detail/img2.png"} alt='One Life Graphic T-shirt' width={170} height={138} className='w-[111px] lg:w-[152px] h-[106px] lg:h-[167px]' />
                        <Image src={"/product-detail/img3.png"} alt='One Life Graphic T-shirt' width={170} height={138} className='w-[111px] lg:w-[152px] h-[106px] lg:h-[167px]' />
                    </div>
                    <Image src={"/product-detail/img4.png"} alt='One Life Graphic T-shirt' width={500} height={600} className='w-full md:w-[444px] h-[290px] md:h-[530px]' />

                </div>
                <div className='flex flex-col gap-[40px] mt-5 md:mt-0 md:ml-[40px]'>
                    <div className='flex flex-col justify-start items-start gap-[24px]'>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold text-[24px] md:text-[40px]'>
                                One Life Graphic T-shirt
                            </h1>
                            <div className='flex flex-row items-center p-0 gap-[7.1px] w-[290px] h-[21px] text-[20px]'>
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={i < Math.floor(4) ? "text-yellow-400" : "text-gray-300"}
                                    >
                                        ★
                                    </span>
                                ))}
                                <p className=' font-normal text-[14px] leading-[21px] ml-4'>
                                    4.5/<span className='text-muted-foreground'>5</span>
                                </p>
                            </div>
                            <div className='flex justify-center items-center gap-[26px]'>
                                <p className='text-[32px] font-bold'>$260 <span className='text-muted-foreground line-through'>$300</span>                            </p>
                                <div className="w-[72px] h-[32px] flex justify-center items-center hover:bg-destructive/40 bg-[rgba(255,_51,_51,_0.1)] rounded-full font-medium text-[16px] leading-[16px] text-[#FF3333]">
                                    -40%
                                </div>
                            </div>

                        </div>
                        <p className='max-w-[590px] text-[16px] font-normal opacity-50'>
                            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.                        </p>
                        <hr className='w-full' />
                        <div className='flex flex-col items-start p-0 gap-[16px]'>
                            <p className='text-[16px] font-normal opacity-50'>
                                Select Colors
                            </p>
                            <svg width="143" height="37" viewBox="0 0 143 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.5" cy="18.5" r="18.5" fill="#4F4631" />
                                <path d="M24.5306 15.0306L16.5306 23.0306C16.4609 23.1005 16.3781 23.156 16.287 23.1939C16.1958 23.2317 16.0981 23.2512 15.9993 23.2512C15.9006 23.2512 15.8029 23.2317 15.7117 23.1939C15.6206 23.156 15.5378 23.1005 15.4681 23.0306L11.9681 19.5306C11.8983 19.4609 11.843 19.378 11.8052 19.2869C11.7675 19.1957 11.748 19.098 11.748 18.9994C11.748 18.9007 11.7675 18.803 11.8052 18.7119C11.843 18.6207 11.8983 18.5379 11.9681 18.4681C12.0379 18.3984 12.1207 18.343 12.2118 18.3053C12.303 18.2675 12.4007 18.2481 12.4993 18.2481C12.598 18.2481 12.6957 18.2675 12.7869 18.3053C12.878 18.343 12.9608 18.3984 13.0306 18.4681L16 21.4375L23.4693 13.9694C23.6102 13.8285 23.8013 13.7493 24.0006 13.7493C24.1999 13.7493 24.391 13.8285 24.5318 13.9694C24.6727 14.1103 24.7519 14.3014 24.7519 14.5006C24.7519 14.6999 24.6727 14.891 24.5318 15.0319L24.5306 15.0306Z" fill="white" />
                                <circle cx="71.5" cy="18.5" r="18.5" fill="#314F4A" />
                                <circle cx="124.5" cy="18.5" r="18.5" fill="#31344F" />
                            </svg>
                        </div>
                        <hr className='w-full' />
                        <div className='flex flex-col gap-[16px]'>
                            <p className='text-[16px] font-normal opacity-50'>
                                Choose Size
                            </p>
                            <div className='flex flex-wrap gap-2 md:gap-3'>
                                <Button className='px-[20px] md:px-[24px] h-[39px] md:h-[46px] text-[14px] md:text-[16px] rounded-full bg-[#F0F0F0] text-black/60'>
                                    Small
                                </Button>
                                <Button className='px-[20px] md:px-[24px] h-[39px] md:h-[46px] text-[14px] md:text-[16px] rounded-full bg-[#F0F0F0] text-black/60'>
                                    Medium
                                </Button>
                                <Button className='px-[20px] md:px-[24px] h-[39px] md:h-[46px] text-[14px] md:text-[16px] rounded-full text-white'>
                                    Large
                                </Button>
                                <Button className='px-[20px] md:px-[24px] h-[39px] md:h-[46px] text-[14px] md:text-[16px] rounded-full bg-[#F0F0F0] text-black/60'>
                                    X-Large
                                </Button>
                            </div>

                        </div>
                        <hr className='w-full' />
                        <div className='flex flex-wrap gap-[12px] md:gap-[16px]'>
                            <div className='flex flex-row items-center justify-between py-[14px] px-[20px] w-[110px] md:w-[170px] h-[44px] md:h-[52px] rounded-full bg-[#F0F0F0]'>
                                <Minus className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] ' />
                                <p>1</p>
                                <Plus className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] ' />
                            </div>
                            <Button className='w-[236px] md:w-[400px] h-[44px] rounded-full text-[14px] md:text-[16px] text-white'>
                                Add to Cart
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full md:w-[86.111vw] mt-[80px] flex flex-col justify-center items-center'>
                <TabNavigation />
                {/* heading and buttons */}
                <div className='flex w-full px-[16px] justify-between items-center mt-[26px] md:mt-[32px]'>
                    <h1 className='text-[20px] md:text-[24px] font-bold'>
                        All Reviews { }

                        <span className='text-[14px] md:text-[16px] font-normal leading-[22px] text-muted-foreground'>
                            (451)
                        </span>
                    </h1>
                    <div className='flex flex-row items-center gap-[8px] md:gap-[10px]'>
                        <Button className='rounded-full w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] bg-[#F0F0F0] p-0'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                <path d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z" fill="black" />
                            </svg>

                        </Button>
                        <Button className='hidden md:flex rounded-full w-[120px] h-[48px] bg-[#F0F0F0] text-black p-0'>
                            Latest
                            <ChevronDown className='ml-[3px]' />

                        </Button>
                        <Button className='flex rounded-full w-[133px] sm:w-[166px] h-[40px] sm:h-[48px] p-0'>
                            Write a Review
                        </Button>
                    </div>
                </div>
                {/* review card */}
                <div className='w-[98vw] flex justify-center items-center'>
                <Reviews />
                </div>
                <Suggestions />
            </div>
        </div>
    )
}

export default page