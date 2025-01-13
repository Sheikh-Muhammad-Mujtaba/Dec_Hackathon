"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Ellipsis, SlidersHorizontal } from "lucide-react";


export const revalidate = 2;
async function fetchProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?id=${id}`, { cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

async function postReview(id: string, review: { rating: number; name: string; review: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...review }),
  });
  if (!res.ok) {
    throw new Error("Failed to post review");
  }
  return res.json();
}

interface Review {
  id: number;
  rating: number;
  name: string;
  review: string;
  date: string;
}

interface Product {
  Reviews: Review[];
}

interface ReviewCardProps {
  reviews: Review[];
  visibleReviews: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviews, visibleReviews }) => {
  return (
    <div className="flex flex-wrap justify-center gap-[20px] w-full px-[16px]">
      {reviews.slice(0, visibleReviews).map((review) => (
        <div
          key={review.id}
          className="relative w-full md:max-w-[610px] min-h-[224px] bg-transparent py-[28px] px-[32px] rounded-lg hover:shadow-2xl flex flex-wrap items-start justify-start border-[1px] border-[rgba(0,0,0,0.1)]"
        >
          <Ellipsis className="absolute right-[32px] top-[28px]" />
          <div className="flex flex-col items-start gap-[15px] justify-start mb-3">
            <div className="w-full text-start text-yellow-400 text-[20px]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <div className="flex items-center gap-[4px]">
              <h3 className="text-[20px] font-bold">{review.name}</h3>
              <BadgeCheck color="#006607" strokeWidth={1.75} absoluteStrokeWidth />
            </div>
          </div>
          <p className="text-gray-600 text-[14px] md:text-[16px]">{review.review}</p>
          <p className="text-gray-600 mt-6 text-[14px] md:text-[16px]">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

interface ReviewsProps {
  id: string;
}

const Reviews: React.FC<ReviewsProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [visibleReviews, setVisibleReviews] = useState<number>(4);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [newReview, setNewReview] = useState<{ name: string; rating: number; review: string }>({
    name: "",
    rating: 5,
    review: "",
  });

  useEffect(() => {
    async function getProduct() {
      const productData = await fetchProduct(id);
      setProduct(productData);
    }
    getProduct();
  }, [id]);

  const sortedReviews = product?.Reviews.sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const handlePostReview = async () => {
    try {
      const reviewResponse = await postReview(id, newReview);
      setProduct((prev) => ({
        ...prev!,
        Reviews: [...prev!.Reviews, reviewResponse],
      }));
      setNewReview({ name: "", rating: 5, review: "" });
      setShowReviewForm(false);
    } catch (error) {
      console.error("Failed to post review:", error);
    }
  };

  return (
    <div className="mt-[39px] flex flex-col justify-center items-center">
      <div className="flex w-full px-[16px] justify-between items-center mt-[26px] md:mt-[32px]">
        <h1 className="text-[20px] md:text-[24px] font-bold">
          All Reviews{" "}
          <span className="text-[14px] md:text-[16px] font-normal leading-[22px] text-muted-foreground">
            ({product?.Reviews.length || 0})
          </span>
        </h1>
        <div className="flex flex-row items-center gap-[8px] md:gap-[10px]">
          <Button className="rounded-full w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] bg-[#F0F0F0] p-0 text-black">
            <SlidersHorizontal />
          </Button>
          <select
            title="Sort Order"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="rounded-full w-[120px] h-[48px] bg-[#F0F0F0] text-black p-2 cursor-pointer"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <Button
            onClick={() => setShowReviewForm((prev) => !prev)}
            className="flex rounded-full w-[133px] sm:w-[166px] h-[40px] sm:h-[48px] p-0"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {showReviewForm && (
        <div className="w-full px-[16px] mt-4">
          <textarea
            placeholder="Write your review"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Your name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            title="Rating"
            type="range"
            min={1}
            max={5}
            step={1}
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            className="w-full"
          />
          <p className="text-center">Rating: {newReview.rating}</p>
          <Button onClick={handlePostReview} className="w-full">
            Submit Review
          </Button>
        </div>
      )}

      {product && (
        <div className="w-[98vw] flex justify-center items-center mt-4">
          <ReviewCard reviews={sortedReviews!} visibleReviews={visibleReviews} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
