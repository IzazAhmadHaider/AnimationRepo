import { useState } from "react";
import "../../src/App.css";
import ScrollAnimation from "./Scroll_Animation";

function ReactAnimations() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        
        <ScrollAnimation />
      </div>
      
    </>
  );
}

export default ReactAnimations;
