import React from "react";
import Image from "next/image";

export default function Browse() {
    return (
        <div className="flex justify-center items-center px-[16px] md:mt-[80px]">
            <div className="flex overflow-hidden flex-col px-[24px] pt-[40px] w-full bg-zinc-100 max-w-[1239px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h1 className="self-center text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
                    BROWSE BY DRESS STYLE
                </h1>
                <div className="mt-7 max-md:mt-10 max-md:max-w-full">
                    {/* First Row */}
                    <div className="flex gap-4 md:gap-5 max-md:flex-col">
                        <div className="relative flex flex-col w-[37%] max-md:w-full h-[190px] md:h-[289px] rounded-3xl">
                            <h1 className="absolute left-[24px] md:left-[36px] top-[16px] md:top-[25px] font-bold text-[24px] md:text-[36px] leading-[49px] flex items-center text-[#000000]">
                                Casual
                            </h1>
                            <Image
                                src={"/Browse/img1.png"}
                                alt=""
                                width={200}
                                height={200}
                                className="object-cover grow rounded-3xl w-full h-full"
                            />
                        </div>
                        <div className="relative flex flex-col w-[63%] max-md:w-full h-[190px] md:h-[289px] rounded-3xl">
                            <h1 className="absolute left-[24px] md:left-[36px] top-[16px] md:top-[25px] font-bold text-[24px] md:text-[36px] leading-[49px] flex items-center text-[#000000]">
                                Formal
                            </h1>
                            <Image
                                src={"/Browse/img2.png"}
                                alt=""
                                width={200}
                                height={200}
                                className="object-cover grow w-full rounded-3xl max-md:max-w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-5 max-md:max-w-full mb-[37px] md:mb-[76px]">
                    {/* Second Row */}
                    <div className="flex gap-4 md:gap-5 max-md:flex-col">
                        <div className="relative flex flex-col w-[63%] max-md:w-full h-[190px] md:h-[289px]">
                            <h1 className="absolute left-[24px] md:left-[36px] top-[16px] md:top-[25px] font-bold text-[24px] md:text-[36px] leading-[49px] flex items-center text-[#000000]">
                                Party
                            </h1>
                            <Image
                                src={"/Browse/img3.png"}
                                alt=""
                                width={200}
                                height={200}
                                className="object-cover grow w-full rounded-3xl max-md:mt-5 max-md:max-w-full h-full"
                            />
                        </div>
                        <div className="relative flex flex-col w-[37%] max-md:w-full h-[190px] md:h-[289px]">
                            <h1 className="absolute left-[24px] md:left-[36px] top-[16px] md:top-[25px] font-bold text-[24px] md:text-[36px] leading-[49px] flex items-center text-[#000000]">
                                Gym
                            </h1>
                            <Image
                                src={"/Browse/img4.png"}
                                alt=""
                                width={200}
                                height={200}
                                className="object-cover grow w-full rounded-3xl max-md:mt-5 h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
