import React from 'react'
import Card from './Cards'
import { Button } from '@/components/ui/button'

function TopSelling() {
  return (
    <div className='flex flex-col justify-center items-center pt-[40px] md:pt-[64px] px-[16px]'>
        <h1 className='text-[32px] md:text-[48px] font-bold uppercase'>
        top selling
        </h1>
        <div className='min-w-[310px] w-full mt-[32px] md:mt-[55px] flex justify-start md:justify-center items-center overflow-hidden'>
            <Card />
        </div>
      <Button className='mt-[24px] md:mt-[36px] w-full md:w-[218px] h-[52px] bg-transparent border-[1px] border-[rgba(0,0,0,0.1)] rounded-full text-[16px] text-black font-medium'>
        View All
      </Button>
    </div>
  )
}

export default TopSelling