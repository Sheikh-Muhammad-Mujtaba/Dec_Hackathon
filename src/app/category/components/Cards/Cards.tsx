"use client";

import { useEffect, useState, useMemo } from "react";
import { Card as UiCard, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  tag: string[];
  color: string;
  size: string;
  dressStyle: string;
}

interface ProductListProps {
  filters: Record<string, any>;
  currentPage: number;
  productsPerPage: number;
}

const ProductList = ({ filters, currentPage, productsPerPage }: ProductListProps) => {
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    let filtered = allItems;

    if (filters.category) {
      filtered = filtered.filter((item) => item.tag.includes(filters.category));
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (item) => item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]
      );
    }

    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter((item) => filters.colors.includes(item.color));
    }

    if (filters.size && filters.size.length > 0) {
      filtered = filtered.filter((item) => filters.size.includes(item.size));
    }

    if (filters.dressStyle) {
      filtered = filtered.filter((item) => item.tag.includes(filters.dressStyle));
    }

    return filtered;
  }, [filters, allItems]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Item[] = await response.json();
        setAllItems(data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) {
    return <p className="w-full text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (filteredItems.length === 0) {
    return <p>No products available.</p>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredItems.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-wrap justify-center items-center gap-[16px] md:gap-[20px]">
      {currentProducts.map((product) => (
        <UiCard
          key={product.id}
          className="group relative min-w-[198px] md:max-w-[280px] rounded-none border-none shadow-none"
        >
          <CardContent className="p-0">
            <div className="relative aspect-square flex justify-center items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={295}
                height={180}
                className="w-[198px] md:w-[295px] h-[200.01px] md:h-[298px] object-scale-down"
              />
            </div>

            <div className="p-0 pt-4">
              <h3 className="font-bold text-[14px] md:text-[18px] mb-[4px] md:mb-[8px]">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-muted-foreground">
                  {product.rating}/5
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-[20px] md:text-[24px] font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-[20px] md:text-[24px] font-bold text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <Badge
                    variant="destructive"
                    className="bg-[rgba(255,_51,_51,_0.1)] font-medium text-[12px] leading-[16px] text-[#FF3333]"
                  >
                    -{product.discount}%
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </UiCard>
      ))}
    </div>
  );
};

export default ProductList;

