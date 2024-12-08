import React from 'react'
import Image from "next/image";

function Banner() {
    return (
        <div className='flex flex-wrap justify-center items-center gap-[32px] md:gap-[106px] max-w-[1440px] min-h-[122px] bg-[#000000] py-[40px]'>
            {/* versace */}
            <Image src={"/Hero/versace.png"} alt='Versace Logo' width={100} height={100} 
            className='h-[23.25px] md:h-[33.16px] w-[116.74px] md:w-[166.48px]'/>
            {/* Zara */}
            <Image src={"/Hero/zara.png"} alt='Zara Logo' width={100} height={100} 
            className='h-[26.65px] md:h-[38px] w-[63.81px] md:w-[91px]'/>
            {/* Gucci */}
            <Image src={"/Hero/gucci.png"} alt='Gucci Logo' width={100} height={100} 
            className='h-[25.24px] md:h-[36px] w-[109.39px] md:w-[156px]'/>
            {/* parada */}
            <Image src={"/Hero/parada.png"} alt='Parada Logo' width={100} height={100} 
            className='h-[21px] md:h-[32px] w-[127px] md:w-[194px]'/>
            {/* Calvin */}
            <Image src={"/Hero/calvin.png"} alt='Calvin Klein Logo' width={100} height={100} 
            className='h-[21.75px] md:h-[33.35px] w-[134.84px] md:w-[206.79px]'/>


        </div>
    )
}

export default Banner