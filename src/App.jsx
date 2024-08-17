import Home from "./Home"

import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import MotionComp from "./framer-components/MotionComp"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/motion" element={<MotionComp />} />
      </Routes>
    </>
  )
}

export default App
