import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./IntroAnimation.css"

gsap.registerPlugin(ScrollTrigger)

const IntroAnimation = ({ onFinish }) => {
  const wrapperRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        onLeave: () => {
          // Chama a função onFinish quando a rolagem passa da animação
          if (onFinish) {
            onFinish()
          }
        },
      },
    })

    tl.to(logoRef.current, {
      scale: 5,
      opacity: 0,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [onFinish])

  return (
    <div className="intro-wrapper" ref={wrapperRef}>
      <img
        src="/LOGO_MKL.svg" // Substitua pelo caminho correto da sua logo
        alt="Logo"
        className="intro-logo"
        ref={logoRef}
      />
    </div>
  )
}

export default IntroAnimation
