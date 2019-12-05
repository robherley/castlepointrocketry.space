import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es.js"

// lots of images
import RocketAnimate from "../images/rocket-animate.inline.svg"
import RocketStatic from "../images/rocket-static.svg"
import TinyRocket from "../images/tiny-rocket.inline.svg"
import Cone from "../images/rocket-components/cone.svg"
import Shute from "../images/rocket-components/shute.svg"
import Electric from "../images/rocket-components/electric.svg"
import Tanks from "../images/rocket-components/tanks.svg"
import Wings from "../images/rocket-components/wings.svg"
import Engine from "../images/rocket-components/engine.svg"

const fixtures = [
  {
    name: "Nose Cone",
    desc:
      "Designed to minimize aerodynamic resistance and reliably  house payloads.",
    imgSrc: Cone,
  },
  {
    name: "Recovery System",
    desc:
      "A drogue piloted dual chute system means our vehicle is fully recoverable.",
    imgSrc: Shute,
  },
  {
    name: "Avionics Package",
    desc:
      "Our custom avionics are developed to handle navigation, telemetry, data acquisition, flight control, and more.",
    imgSrc: Electric,
  },
  {
    name: "Custom Composite Tanks",
    desc:
      "Cutting edge linerless tanks allow our vehicle to fly higher, carry more payload mass, and operate at peak efficiency.",
    imgSrc: Tanks,
  },
  {
    name: "Fins",
    desc:
      "Precision machined out of titanium, these control surfaces stabilize the flight profile of our vehicle while resisting peak temperatures.",
    imgSrc: Wings,
  },
  {
    name: "Engine",
    desc:
      "Our fully 3D printed engine is designed for maximum efficiency and minimum complexity.",
    imgSrc: Engine,
  },
]

const Landing = () => {
  const [showRocket, setShowRocket] = useState(0)
  useEffect(() => {
    setShowRocket(1)
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
  }, [])
  return (
    <>
      <section className="landing--rocket">
        <div className="rocket-container">
          <RocketAnimate
            className="rocket-animate"
            style={{ opacity: showRocket }}
          />
          <img
            src={RocketStatic}
            className="rocket-static"
            alt="static-rocket"
          />
        </div>
        <div className="text-container">
          <h1>
            Pushing the <span>cutting edge</span> of aerospace manufacturing
          </h1>
          {/* TODO: change to blog when blog is finished */}
          <Link to="/mission" className="check-out">
            Check out what we're up to
          </Link>
          <p className="scroll">Or, scroll to see more of our rocket</p>
        </div>
      </section>
      <div className="landing--intro">
        <section className="intro">
          <div className="tiny-rocket">
            <TinyRocket />
          </div>
          <h1>Meet Our Rocket</h1>
          <p className="bold" style={{ marginBottom: "0.5rem" }}>
            Powerful · Efficient · Reusable
          </p>
          <p>
            Our launch vehicle features a robust 3D printed engine, and is
            capable of achieving altitudes in excess of 100 km.
          </p>
        </section>
      </div>
      <div className="landing--components">
        {fixtures.map(({ name, desc, imgSrc }) => (
          <section key={name}>
            {<img src={imgSrc} className="component-img" alt={name} />}
            <div className="text">
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Landing
