import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "../Header/Header"
import MainSections from "../Main/MainSections"
import "./IntroAnimation.css"

gsap.registerPlugin(ScrollTrigger)

export default function IntroAnimation() {
  const wrapperRef = useRef(null)
  const logoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuração inicial
      gsap.set(contentRef.current, {
        opacity: 0,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      })

      gsap.set(logoRef.current, {
        scale: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        zIndex: 1000,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Animação da logo
      tl.to(logoRef.current, {
        scale: 2,
        opacity: 0,
        ease: "power2.inOut",
      })

      // Animação do conteúdo
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "-=0.3"
      )

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }, wrapperRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={wrapperRef} className="intro-wrapper">
      <img ref={logoRef} src="/LOGO_MKL.svg" alt="Logo" className="logo" />
      <div ref={contentRef} className="content">
        <Header />
        <MainSections />
      </div>
    </section>
  )
}
