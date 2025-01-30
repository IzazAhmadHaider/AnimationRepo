"use client";

import { useEffect, useState } from "react";

export default function Right_SmallCards() {
  const [scrollEffect, setScrollEffect] = useState({
    scaleX: 1, // Initial scale is 1 (no scaling)
    scaleY: 1, // Initial scale is 1 (no scaling)
    translateX: 0, // Initial horizontal translation is 0
    translateY: 0, // Initial vertical translation is 0
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000; // Maximum scroll range for the animation
      const scaleIntensity = 0.02; // Increased scale sensitivity
      const moveIntensityX = 0.03; // Movement sensitivity for translateX
      const moveIntensityY = 0.4; // Increased movement sensitivity for translateY (vertical movement)

      // Calculate scale and translation values based on the scroll position
      const scaleX = Math.max(0.9, 1 - scrollY * scaleIntensity);
      const scaleY = Math.max(0.9, 1 - scrollY * scaleIntensity);

      const translateX = Math.min(100, scrollY * moveIntensityX); // Horizontal movement remains the same
      const translateY = Math.min(800, scrollY * moveIntensityY); // Increased vertical movement

      // Update scroll effect
      setScrollEffect({
        scaleX,
        scaleY,
        translateX,
        translateY,
      });

      // If scrolling, set to true
      if (!isScrolling) {
        setIsScrolling(true);
      }

      // Clear the previous timeout (stop animation when scroll stops)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set timeout to stop animation after scroll stops
      setScrollTimeout(
        setTimeout(() => {
          setIsScrolling(false);
        }, 150) // Stop animation 150ms after scrolling stops
      );
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling, scrollTimeout]);

  return (
    <div className=" Right_SmallCards_Container">
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 1"
        className="small-card"
        style={{
          transform: `translate(${scrollEffect.translateX}px, ${scrollEffect.translateY}px) scale(${scrollEffect.scaleX}, ${scrollEffect.scaleY})`,
          transition: isScrolling
            ? "transform 0.15s ease-out"
            : "transform 0.5s ease-out", // Smooth transition based on scroll
          marginTop: "0px",
        }}
      />
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 2"
        className="small-card"
        style={{
          transform: `translate(${scrollEffect.translateX}px, ${scrollEffect.translateY}px) scale(${scrollEffect.scaleX}, ${scrollEffect.scaleY})`,
          transition: isScrolling
            ? "transform 0.15s ease-out"
            : "transform 0.5s ease-out", // Same transition for both cards
          marginTop: "0px",
        }}
      />
    </div>
  );
}
