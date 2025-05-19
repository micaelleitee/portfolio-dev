import React, { useState, useEffect } from "react"
import IntroAnimation from "./components/IntroAnimation/IntroAnimation.jsx"
import Header from "./components/Header/Header.jsx"
import MainSections from "./components/Main/MainSections"
import "./App.css"

function App() {
  const [showContent, setShowContent] = useState(false)
  const [introCompleted, setIntroCompleted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 100 && introCompleted) {
        setShowContent(true)
      } else if (scrollY <= 50) {
        setShowContent(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [introCompleted])

  return (
    <>
      <IntroAnimation onFinish={() => setIntroCompleted(true)} />

      <div className={`page-content ${showContent ? "fade-in" : "fade-out"}`}>
        <Header />
        <MainSections />
      </div>
    </>
  )
}

export default App
