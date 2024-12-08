"use client"

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

export default function PriceRangeSlider() {
  const [range, setRange] = useState([50, 200]);

  const handleChange = (newRange: any) => {
    setRange(newRange);
  };

  return (
    <div className="w-full max-w-[247px] mx-auto">
      <Slider
        range
        min={0}
        max={500}
        defaultValue={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: "black", height: 4 }]}
        handleStyle={[
          { backgroundColor: "black", borderColor: "black" },
          { backgroundColor: "black", borderColor: "black" },
        ]}
        railStyle={{ backgroundColor: "#e4e4e4", height: 4 }}
      />
      <div className="ml-[10px] w-[100px] flex justify-between mt-2 text-sm font-medium">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
}
