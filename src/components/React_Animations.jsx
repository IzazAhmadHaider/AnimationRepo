import { useState } from "react";
import "../../src/App.css";
import ScrollAnimation from "./Scroll_Animation";
import Right_SmallCards from "./Right_Side_Container";
import Left_SmallCards from "./Left_Side_Container";
import { div } from "motion/react-client";
import Rotate from "./motion";
import BankingExperience from "./Home_Page_Text";

function ReactAnimations() {
  return (
    <div>
      {/* <div style={{ height: "60vh" }}>
        <BankingExperience/>
      </div> */}

      <div className="animation-container ">
        {/* Right Side - Small Cards */}
        {/* <div className="Left-side-container"> */}
        <Left_SmallCards />
        {/* </div> */}

        {/* Middle - Scroll Animation */}
        {/* <div className="ymiddle-container"> */}
        <ScrollAnimation />
        {/* </div> */}

        {/* Left Side - Small Cards */}
        {/* <div className="Right-side-container"> */}
        <Right_SmallCards />
        {/* </div> */}
      </div>
      <div style={{ height: "100vh" }}>
        {/* <Rotate /> */}
      </div>

      <style>
        {`
         
        `}
      </style>
    </div>
  );
}

export default ReactAnimations;
