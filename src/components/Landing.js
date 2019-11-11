import React, { useEffect } from "react"
import { Link } from "gatsby"
import anime from "animejs/lib/anime.es.js"

// lots of images
import RocketAnimate from "../images/rocket-animate.inline.svg"
import RocketStatic from "../images/rocket-static.svg"
import TinyRocket from "../images/tiny-rocket.inline.svg"
import Cone from "../images/rocket-components/cone.inline.svg"
import Shute from "../images/rocket-components/shute.inline.svg"
import Electric from "../images/rocket-components/electric.inline.svg"
import Tanks from "../images/rocket-components/tanks.inline.svg"
import Wings from "../images/rocket-components/wings.inline.svg"
import Engine from "../images/rocket-components/engine.inline.svg"

const fixtures = [
  {
    name: "Coney Boi",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Cone,
  },
  {
    name: "Parachute Boi",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Shute,
  },
  {
    name: "Electric Boi",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Electric,
  },
  {
    name: "Tank Bois",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Tanks,
  },
  {
    name: "Wing Bois",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Wings,
  },
  {
    name: "Engine Boi",
    desc:
      "Est labore tempore aut rerum architecto. Quae quod doloribus ab sit ea dignissimos nesciunt officiis. Est quia impedit quia deserunt facere. Accusamus incidunt natus ea error molestiae quod.",
    Comp: Engine,
  },
]

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
      opacity: [0, 1],
    })
  }, [])
  return (
    <>
      <section className="landing--rocket">
        <div className="rocket-container">
          <RocketAnimate className="rocket-animate" />
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
          <Link to="/" className="check-out">
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
          <p>
            In the last year, our company has developed a unique, 3D-printed
            engine and an innovative, pressure-driven launch platform with which
            to demonstrate it. This was accomplished not only by our modern
            approach to aerospace development, but also by a talented and driven
            team of engineers and scientists.
          </p>
        </section>
      </div>
      <div className="landing--components">
        {fixtures.map(({ name, desc, Comp }) => (
          <section key={name}>
            <div className="text">
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
            {<Comp className="component-img" />}
          </section>
        ))}
      </div>
    </>
  )
}

export default Landing
