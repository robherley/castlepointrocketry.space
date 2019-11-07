import React, { useEffect } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es.js"
import RocketAnimate from "../images/rocket-animate.inline.svg"
import RocketStatic from "../images/rocket-static.svg"

const Landing = () => {
  useEffect(() => {
    anime({
      targets: ".rocket-animate > g > *",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: ({ className: { baseVal } }, i) =>
        i * (baseVal === "st1" ? 15 : 10),
      direction: "alternate",
      loop: false,
    })
  })

  return (
    <div className="landing">
      <div className="rocket-container">
        <RocketAnimate className="rocket-animate" />
        <img src={RocketStatic} className="rocket-static" alt="static-rocket" />
      </div>
      <div className="text-container">
        <h1>
          Pushing the <span>cutting edge</span> of aerospace manufacturing.
        </h1>
        <Link to="/" className="check-out">
          Check out how we're doing it.
        </Link>
      </div>
    </div>
  )
}

export default Landing
