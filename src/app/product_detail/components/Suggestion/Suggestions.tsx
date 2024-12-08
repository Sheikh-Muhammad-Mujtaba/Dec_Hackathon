import React from 'react'
import Card from './Cards'

function Suggestions() {
  return (
    <div className='mt-[49.81px] md:mt-[64px] flex flex-col justify-center items-center px-[16px]'>
        <h1 className='max-w-[579px] px-[53px] sm:px-0 uppercase font-[700] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] text-center text-[#000000] mb-[40px] md:mb-[55px]'>
        You might also like
        </h1>
        <div className='w-[95vw] mt-[32px] md:mt-[55px] flex justify-start md:justify-center items-center overflow-x-hidden'>
        <Card />
        </div>
    </div>
  )
}

export default Suggestions