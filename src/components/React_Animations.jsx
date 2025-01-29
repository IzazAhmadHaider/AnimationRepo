import { useState } from "react";
import "./App.css";
import ScrollAnimation from "./components/Scroll_Animation";

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
