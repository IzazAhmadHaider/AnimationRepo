"use client";

import { useEffect, useState } from "react";

export default function Right_SmallCards() {
  const [scrollEffect, setScrollEffect] = useState({
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
  });
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = 1000; // Adjust based on page height
        const scrollDelta = scrollY - prevScroll;

        const isScrollingDown = scrollDelta > 0;

        // Scale remains subtle but smooth
        const scaleX = Math.max(0.9, 1 - scrollY / maxScroll);
        const scaleY = Math.max(0.9, 1 - scrollY / maxScroll);

        // More movement on Y-axis, slight movement on X-axis
        const translateX = isScrollingDown
          ? Math.min(30, scrollY / 15) // Slight movement on X
          : Math.max(-30, -scrollY / 15);

        const translateY = isScrollingDown
          ? Math.min(250, scrollY / 2.5) // Stronger movement on Y
          : Math.max(-250, -scrollY / 2.5);

        setScrollEffect({ scaleX, scaleY, translateX, translateY });
        setPrevScroll(scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <div className="column-container">
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 1"
        className="small-card"
        style={{
          transform: `translate(${scrollEffect.translateX}px, ${scrollEffect.translateY}px) scale(${scrollEffect.scaleX}, ${scrollEffect.scaleY})`,
          transition: "transform 0.8s ease-out", // Smoother & longer duration
        }}
      />
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 2"
        className="small-card"
        style={{
          transform: `translate(${scrollEffect.translateX}px, ${scrollEffect.translateY}px) scale(${scrollEffect.scaleX}, ${scrollEffect.scaleY})`,
          transition: "transform 0.8s ease-out", // Same smooth effect
        }}
      />
    </div>
  );
}
