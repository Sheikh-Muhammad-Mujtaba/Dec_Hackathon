import Browse from "@/components/Browse/Browse";
import Hero from "@/components/Hero/Hero";
import NewArrival from "@/components/product/NewArrival/NewArrival";
import TopSelling from "@/components/product/TopSelling/TopSelling";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <TopSelling />
      <Browse />
      <Reviews />
    </div>
  );
}
