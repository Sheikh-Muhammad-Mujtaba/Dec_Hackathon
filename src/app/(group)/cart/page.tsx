"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowRight, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import Cart from './components/ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CardContext';
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

function Page() {
  const { cartItems, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const DISCOUNT_RATE = 0.2;
  const DELIVERY_FEE = 15;

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = DISCOUNT_RATE * subtotal;
  const total = subtotal - discount + DELIVERY_FEE;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  const handleCheckout = () => {
    setLoading(true);
    toast({
      title: "Checkout initiated",
      description: "Your order is being processed.",
    });
    clearCart();
    setTimeout(() => setLoading(false), 2000); // Simulate async process
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[24px] md:text-[32px] font-bold">Your cart is empty!</h1>
        <Link href='/' className="mt-4">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-[24px] w-full justify-center items-center gap-[24px]">
      <Breadcrumb className="mx-[16px] md:mx-[100px] w-[81.25vw]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="text-gray-500" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="font-bold text-[32px] md:text-[40px] uppercase w-full px-[16px] md:px-[100px]">
        Your cart
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-[20px] w-full px-[16px]">
        {/* Cart Section */}
        <div className="flex flex-col items-start justify-center gap-[16px] md:gap-[24px] border-[1px] rounded-[20px] min-w-[300px] w-full lg:w-[50%] p-[16px]">
          {cartItems.map((item) => (
            <Cart key={`${item.id}-${item.color}-${item.size}`} item={item} />
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="box-border flex flex-col items-start gap-[16px] md:gap-[24px] border-[1px] rounded-[20px] min-w-[300px] w-full lg:w-[35%] p-[16px]">
          <h1 className="font-bold text-[20px] md:text-[24px]">Order Summary</h1>

          <div className="flex flex-col gap-[16px] md:gap-[20px] w-full">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{formatCurrency(subtotal)}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount (-20%)</p>
              <p className="text-[#FF3333]">-{formatCurrency(discount)}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>{formatCurrency(DELIVERY_FEE)}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-bold">{formatCurrency(total)}</p>
            </div>
          </div>

          <Button onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Go to Checkout"}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
