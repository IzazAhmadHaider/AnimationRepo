import { useState } from 'react'
import ReactAnimation from './components/React_Animations'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Routes>
        <Route index element={<Home />} />
        <Route path="reactanimation" element={<ReactAnimation />} />
      </Routes>
    </>
  );
}

export default App;


