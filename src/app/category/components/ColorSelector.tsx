"use client";

import React, { useState } from "react";
import { CirclePicker } from "react-color";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string | null>("#063AF5");

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
  };

  const colors = [
    "#00C12B",
    "#06CAF5",
    "#F50606",
    "#F57906",
    "#F5DD06",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ];

  return (
    <div className="relative">
      {/* Custom Circle Picker */}
      <div className="flex flex-wrap gap-3 justify-center">
        {colors.map((color, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            style={{
              width: 37,
              height: 37,
              borderRadius: "50%",
              backgroundColor: color,
              position: "relative",
              border: selectedColor === color ? "1px solid black/60" : "1px solid rgba(0,0,0,0.2)",
            }}
            onClick={() => setSelectedColor(color)}
          >
            {/* Add Checkmark */}
            {selectedColor === color && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
