import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import ReviewCard from './ReviewCard'

function Reviews() {
    return (
        <div className='flex flex-col justify-center items-center gap-[24px] md:gap-[40px]'>
            <div className='flex justify-between items-center w-full mt-[50px] md:mt-[80px] px-[16px] md:px-[100px]'>
                <h1 className='text-[32px] md:text-[48px] leading-[36px] font-bold'>
                    OUR HAPPY CUSTOMERS
                </h1>
                <div className='flex gap-4'>
                    <ArrowLeft />
                    <ArrowRight />
                </div>
            </div>
            <div className='flex overflow-hidden w-full'>
                <ReviewCard />
            </div>
        </div>
    )
}

export default Reviews