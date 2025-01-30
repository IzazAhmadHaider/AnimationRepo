import { useState } from "react";
import "../../src/App.css";
import ScrollAnimation from "./Scroll_Animation";
import Right_SmallCards from "./Right_Side_Container";
import Left_SmallCards from "./Left_Side_Container";

function ReactAnimations() {
  return (
    <div className="animation-container">
      {/* Right Side - Small Cards */}
      <div className="side-container">
        <Left_SmallCards />
      </div>

      {/* Middle - Scroll Animation */}
      <div className="middle-container">
        <ScrollAnimation />
      </div>

      {/* Left Side - Small Cards */}
      <div className="side-container">
        <Right_SmallCards />
      </div>

      <style>
        {`
          .animation-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px; /* Space between containers */
            padding: 20px;
            width: 100%;
          }

          .side-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .middle-container {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}

export default ReactAnimations;
