import React, { useLayoutEffect } from "react"
import * as Assets from "../../../../Assets/Images"
import { gsap } from "gsap"

function Hero() {
  const heroSection = document.getElementById("hero__section")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#hero__title", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      })

      gsap.from("#hero__desc", {
        delay:.24,
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      })
    }, heroSection)

    return () => ctx.revert()
  }, [])
  return (
    <section id="hero__section" className="w-full h-[100dvh]">
      <div className="absolute overflow-hidden w-full h-[100dvh] -z-10">
        <img className="w-full h-full object-cover object-center" src={Assets.HeroBg} alt="" />
      </div>

      <div className="w-full h-full flex items-center justify-start">
        <div className="text-primary-white w-full lg:w-[38rem] lg:ml-[20rem] overflow-hidden">
          <h1 id="hero__title" className="text-7xl font-bold">
            Welcome to Barberer
          </h1>
          <p id="hero__desc" className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla soluta veritatis ipsum omnis quo! Repellendus repudiandae in animi, maxime
            perferendis pariatur explicabo laboriosam deleniti!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
