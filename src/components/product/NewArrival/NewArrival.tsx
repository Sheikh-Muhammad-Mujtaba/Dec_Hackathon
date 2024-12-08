import React from 'react'
import Card from './Cards'
import { Button } from '@/components/ui/button'

function NewArrival() {
  return (
    <div className='flex flex-col justify-center items-center pt-[50px] md:pt-[72px] px-[16px]'>
        <h1 className='text-[32px] md:text-[48px] font-bold'>
        NEW ARRIVALS
        </h1>
        <div className='min-w-[310px] w-full mt-[32px] md:mt-[55px] flex justify-start md:justify-center items-center overflow-hidden'>
            <Card />
        </div>
      <Button className='mt-[24px] md:mt-[36px] w-full md:w-[218px] h-[52px] bg-transparent border-[1px] border-[rgba(0,0,0,0.1)] rounded-full text-[16px] text-black font-medium'>
        View All
      </Button>
      <div className="shrink-0 mt-[40px] max-w-full h-px border border-solid border-black border-opacity-10 w-[1240px] max-md:mt-[64px]" />
    </div>
  )
}

export default NewArrival
