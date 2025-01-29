import { useState } from "react";
import "../../src/App.css";
import ScrollAnimation from "./Scroll_Animation";
import Right_SmallCards from "./Right_Side_Container";

function ReactAnimations() {
  return (
    <div className="animation-container">
      {/* Left Side - Scroll Animation */}
      <div className="left-container">
        <ScrollAnimation />
      </div>

      {/* Right Side - Small Cards */}
      <div className="right-container">
        <Right_SmallCards />
      </div>
    </div>
  );
}

export default ReactAnimations;
