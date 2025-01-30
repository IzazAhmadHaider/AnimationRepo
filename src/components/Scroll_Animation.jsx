"use client";

import { useEffect, useState } from "react";

export default function CSSGeneration() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const minScale = 0.7; // Start at normal size
        const maxScale = 1.4; // Maximum scale when scrolled down
        const maxScroll = 1000; // Adjust based on page height

        // Increase scale when scrolling down, decrease when scrolling up
        const newScale = Math.min(
          maxScale,
          minScale + (scrollY / maxScroll) * (maxScale - minScale)
        );

        setScale(newScale);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="example-container">
      {/* iPhone Image Container */}
      <div className="iphone-container">
        <img
          src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f03b9f767058ef4e2cde3_Apple%20Iphone%2014%20pro.png"
          alt="iPhone"
          width="240"
          height="489"
          className="iphone-image"
        />
        {/* Overlay Image (Main Cart) */}
        <img
          src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0907baa84329854c9c_Main%20Cart.jpg"
          alt="Main Cart"
          width="350"
          height="220"
          className="overlay-image"
          style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        />
      </div>

      <style></style>
    </div>
  );
}
