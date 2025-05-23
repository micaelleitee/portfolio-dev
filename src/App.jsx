import { BrowserRouter, Routes, Route } from "react-router-dom"
import IntroAnimation from "./components/IntroAnimation/IntroAnimation"
import Home from "./components/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroAnimation />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
