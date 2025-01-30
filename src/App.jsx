import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactAnimation from './components/React_Animations'
import './App.css'
import ScrollAnimation from "./components/Scroll_Animation";
import Rotate from './components/motion'
import ReactAnimations from './components/React_Animations'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Rotate />
        <Rotate />
        <Rotate />
        {/* <TogglePosition /> */}
        {/* <ControlledAnimation /> */}
        {/* <StateAnimations /> */}
        {/* <ScrollAnimation /> */}
        <ReactAnimations />
        {/* <Gestures />
        <EnterAnimation /> */}
        {/* <KeyframeWildcard /> */}
        <Rotate />
        <Rotate />
        <Rotate />
      </div>
      {/* <div className="keyframe">
        <WildcardKeyframes />
      </div> */}
    </>
  );
}

export default App;


