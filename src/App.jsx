import Home from "./Home"

import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
