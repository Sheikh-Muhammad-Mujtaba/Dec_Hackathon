"use client";

import React, { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "./Suggestion/Cards";
import TabNavigation from "./TabNavigation";

export default function ProductClient({ product }: { product: any }) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (type: "increment" | "decrement") => {
        setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
    };


    return (
        <div className="w-full mt-6 flex flex-col justify-center items-center">
            {/* Breadcrumb */}
            <Breadcrumb className="mx-[16px] md:mx-[100px] w-[81.25vw]">
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
                        <BreadcrumbPage>{product.tag[0]}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Product Detail */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-[16px] gap-[12px] md:gap-[14px] mt-[20px] md:mt-[36px]">
                <div className="flex flex-col-reverse lg:flex-row gap-[12px] md:gap-[14px]">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={500}
                        height={600}
                        className="w-full md:w-[444px] h-[290px] md:h-[530px]"
                    />
                </div>
                <div className="flex flex-col gap-[40px] mt-5 md:mt-0 md:ml-[40px]">
                    <h1 className="font-bold text-[24px] md:text-[40px]">{product.name}</h1>
                    <div className="flex flex-row items-center gap-[7.1px] w-[290px] h-[21px] text-[20px]">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={i < Math.floor(4) ? "text-yellow-400" : "text-gray-300"}
                            >
                                ★
                            </span>
                        ))}
                        <p className="font-normal text-[14px] leading-[21px] ml-4">
                            {product.rating}/<span className="text-muted-foreground">5</span>
                        </p>
                    </div>
                    <p className="text-[32px] font-bold">
                        ${product.price}{" "}
                        {product.originalPrice && <span className="line-through text-muted-foreground">${product.originalPrice}</span>}
                    </p>

                    {/* Colors */}
                    {product.colors && product.colors.length > 0 && (
                        <div>
                            <p className="text-[16px] font-normal opacity-50">Select Colors</p>
                            <div className="flex gap-2 mt-2">
                                {product.colors.map((color: string) => (
                                    <button
                                        title="Select Color"
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <p className="text-[16px] font-normal opacity-50">Choose Size</p>
                            <div className="flex gap-2 mt-2">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-full ${selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex flex-row items-center justify-between py-[14px] px-[20px] w-[110px] md:w-[170px] h-[44px] md:h-[52px] rounded-full bg-[#F0F0F0]">
                            <button title="Decrease Quantity" onClick={() => handleQuantityChange("decrement")} className="rounded">
                                <Minus className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                            </button>
                            <p>{quantity}</p>
                            <button title="Increase Quantity" onClick={() => handleQuantityChange("increment")} className="rounded">
                                <Plus className='w-[20px] md:w-[24px] h-[20px] md:h-[24px]' />
                            </button>
                        </div>
                        <Button
                            className="snipcart-add-item w-[236px] md:w-[400px] h-[44px] rounded-full text-[14px] md:text-[16px] text-white"
                            data-item-id={product.id}
                            data-item-name={product.name}
                            data-item-price={product.price}
                            data-item-url={`${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.id}`}
                            data-item-description={product.description}
                            data-item-image={product.imageUrl}
                            data-item-custom1-name="Color"
                            data-item-custom1-options={product.colors.join('|')}
                            data-item-custom2-name="Size"
                            data-item-custom2-options={product.sizes.join('|')}
                        >
                            Add to Cart
                        </Button>

                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="w-full md:w-[86.111vw] mt-[80px] flex flex-col justify-center items-center">
                <TabNavigation productId={product.id} />
                {/* heading  */}
                <div className='mt-[49.81px] md:mt-[64px] flex flex-col justify-center items-center px-[16px]'>
                    <h1 className='max-w-[579px] px-[53px] sm:px-0 uppercase font-[700] text-[32px] md:text-[48px] leading-[36px] md:leading-[58px] text-center text-[#000000] mb-[40px] md:mb-[55px]'>
                        You might also like
                    </h1>
                    <div className='w-[95vw] mt-[32px] md:mt-[55px] flex justify-center items-center overflow-x-hidden'>
                        <Card relatedTags={product.tag} />
                    </div>
                </div>
            </div>
        </div>
    );
}
