import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "react-router-dom"
import "./IntroAnimation.css"

gsap.registerPlugin(ScrollTrigger)

export default function IntroAnimation() {
  const wrapperRef = useRef(null)
  const logoRef = useRef(null)
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Se o usuário já viu a intro, pula
    if (sessionStorage.getItem("introPlayed")) {
      navigate("/home")
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onLeave: () => {
            sessionStorage.setItem("introPlayed", "true") // ⬅️ Só aqui!
            setIsVisible(false)
            navigate("/home")
          },
        },
      })

      tl.to(logoRef.current, {
        scale: 8,
        opacity: 0,
        ease: "power2.inOut",
      })
    }, wrapperRef)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      ctx.revert()
    }
  }, [navigate])

  if (!isVisible) return null // Evita render

  return (
    <section ref={wrapperRef} className="intro-wrapper">
      <img ref={logoRef} src="/LOGO_MKL.svg" alt="Logo" className="logo" />
    </section>
  )
}
