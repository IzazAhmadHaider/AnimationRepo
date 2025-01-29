// "use client";

// import { useEffect, useState } from "react";

// export default function CSSGeneration() {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       requestAnimationFrame(() => {
//         const scrollY = window.scrollY;
//         const minScale = 0.7; // Start at normal size
//         const maxScale = 1.4; // Maximum scale when scrolled down
//         const maxScroll = 1000; // Adjust based on page height

//         // Increase scale when scrolling down, decrease when scrolling up
//         const newScale = Math.min(
//           maxScale,
//           minScale + (scrollY / maxScroll) * (maxScale - minScale)
//         );

//         setScale(newScale);
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="example-container">

//       {/* iPhone Image Container */}
//       <div className="iphone-container">
//         <img
//           src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f03b9f767058ef4e2cde3_Apple%20Iphone%2014%20pro.png"
//           alt="iPhone"
//           width="240"
//           height="489"
//           className="iphone-image"
//         />
//         {/* Overlay Image (Main Cart) */}
//         <img
//           src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0907baa84329854c9c_Main%20Cart.jpg"
//           alt="Main Cart"
//           width="350"
//           height="220"
//           className="overlay-image"
//           style={{
//             transform: `translate(-50%, -50%) scale(${scale})`,
//           }}
//         />
//       </div>

//       <style>
//         {`
//           .example-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             gap: 20px;
//             padding: 20px;
//             height: 300vh; /* Ensuring enough space for smooth scrolling */
//           }

//           .iphone-container {
//             position: relative;
//             width: 240px;
//             height: 489px;
//           }

//           .iphone-image {
//             width: 100%;
//             height: 100%;
//           }

//           .overlay-image {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             width: 220px;
//             height: 160px;
//             transition: transform 0.2s linear; /* Faster response to scroll */
//           }
//         `}
//       </style>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function CSSGeneration() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const minScale = 0.7;
        const maxScale = 1.4;
        const maxScroll = 1000;

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
      {/* Left Side Containers */}
      <div className="side-container">
        <div className="side-box">Left Box 1</div>
        <div className="side-box">Left Box 2</div>
      </div>

      {/* iPhone Image Container */}
      <div className="iphone-container">
        <img
          src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f03b9f767058ef4e2cde3_Apple%20Iphone%2014%20pro.png"
          alt="iPhone"
          className="iphone-image"
        />
        {/* Overlay Image (Main Cart) */}
        <img
          src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0907baa84329854c9c_Main%20Cart.jpg"
          alt="Main Cart"
          className="overlay-image"
          style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        />
      </div>

      {/* Right Side Containers */}
      <div className="side-container">
        <div className="side-box">Right Box 1</div>
        <div className="side-box">Right Box 2</div>
      </div>

      <style>
        {`
          .example-container {
            display: flex;
            align-items: center; /* Centers everything */
            justify-content: center;
            gap: 20px;
            padding: 20px;
            height: 300vh;
          }

          .side-container {
            display: flex;
            flex-direction: column; /* Stack boxes vertically */
            gap: 15px;
          }

          .side-box {
            width: 100px;
            height: 100px;
            background-color: lightgray;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            font-weight: bold;
          }

          .iphone-container {
            position: relative;
            width: 240px;
            height: 489px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .iphone-image {
            width: 100%;
            height: 100%;
          }

          .overlay-image {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 220px;
            height: 160px;
            transition: transform 0.2s linear;
          }
        `}
      </style>
    </div>
  );
}
