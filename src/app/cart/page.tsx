import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'
import Cart from './components/ProductCard'
import { Button } from '@/components/ui/button'

function page() {
    return (
        <div className='flex flex-col mt-[24px] w-full justify-center items-center gap-[24px]'>
            <Breadcrumb className='mx-[16px] md:mx-[100px] w-[81.25vw]'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <ChevronRight />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Cart</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className='font-bold text-[32px] md:text-[40px] uppercase w-full px-[16px] md:px-[100px]'>
                Your cart
            </h1>
            {/* cards */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-[20px] w-full px-[16px]">
                {/* Cart Section */}
                <div className="flex flex-col items-start justify-center px-[16px] md:px-[24px] py-[16px] md:py-[20px] gap-[16px] md:gap-[24px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[20px] min-w-[300px] w-full lg:w-[50%]">
                    <Cart />
                </div>

                {/* Order Summary Section */}
                <div className="box-border flex flex-col items-start px-[16px] md:px-[24px] py-[16px] md:py-[20px] gap-[16px] md:gap-[24px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-[20px] min-w-[300px] w-full lg:w-[35%]">
                    <h1 className="w-full font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#000000]">
                        Order Summary
                    </h1>

                    {/* Receipt */}
                    <div className="flex flex-col items-start p-0 gap-[16px] md:gap-[20px] w-full">
                        {/* Subtotal Row */}
                        <div className="w-full flex justify-between">
                            <h1 className="text-muted-foreground text-[16px] md:text-[20px]">
                                Subtotal
                            </h1>
                            <h2 className="text-[16px] md:text-[20px] font-bold">$565</h2>
                        </div>

                        {/* Discount Row */}
                        <div className="w-full flex justify-between">
                            <h1 className="text-muted-foreground text-[16px] md:text-[20px]">
                                Discount (-20%)
                            </h1>
                            <h2 className="text-[16px] md:text-[20px] font-bold text-[#FF3333]">
                                -$113
                            </h2>
                        </div>

                        {/* Delivery Fee Row */}
                        <div className="w-full flex justify-between">
                            <h1 className="text-muted-foreground text-[16px] md:text-[20px]">
                                Delivery Fee
                            </h1>
                            <h2 className="text-[16px] md:text-[20px] font-bold">$15</h2>
                        </div>

                        <hr className="w-full" />

                        {/* Total Row */}
                        <div className="w-full flex justify-between">
                            <h1 className="text-[16px] md:text-[20px]">Total</h1>
                            <h2 className="text-[20px] md:text-[24px] font-bold">$467</h2>
                        </div>
                    </div>

                    {/* Promo Code Input */}
                    <div className="flex flex-col md:flex-row justify-center items-center p-0 gap-[12px] w-full">
                        <input
                            type="text"
                            placeholder="Add promo code"
                            className="relative flex flex-row items-start pl-[40px] pr-[8px] py-[12px] gap-[12px] w-full md:w-[326px] h-[48px] bg-[#F0F0F0] rounded-[62px]"
                        />
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[16px]"
                        >
                            <path
                                d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z"
                                fill="black"
                                fill-opacity="0.4"
                            />
                        </svg>

                        <Button className="rounded-full px-[24px] py-[12px] text-[14px] md:text-[16px] font-medium">
                            Apply
                        </Button>
                    </div>

                    {/* Checkout Button */}
                    <Button className="rounded-full w-full h-[48px] md:h-[60px] text-[14px] md:text-[16px] font-medium flex items-center justify-center gap-[12px]">
                        Go to Checkout
                        <ArrowRight className="text-white" />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default page