"use client";
import { useState } from "react";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("Rating & Reviews");

  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  return (
    <div className="flex w-full justify-between items-center font-normal text-center text-black/60 text-[16px] md:text-[20px] text-nowrap leading-[22px] border-b border-gray-300">
      {tabs.map((tab) => (
        <p
          key={tab}
          className={`w-[28.75vw] cursor-pointer pb-[24px] ${
            activeTab === tab
              ? "font-medium text-black border-b-2 border-black"
              : "text-black/60 "
          }`}
          onClick={() => setActiveTab(tab)} 
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
