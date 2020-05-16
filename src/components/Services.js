import React from "react"
import TinyIdea from "../images/tiny-idea.inline.svg"

const Services = () => {
  return (
    <div className="mission">
      <h1 className="page-header">Our Services</h1>
      <div className="container">
        <section className="mission--sub-section">
          <div className="icon">
            <TinyIdea />
          </div>
          <h1 className="sub-header">Microgravity</h1>
          <p>
            Research in space, without the high price tag. We offer
            competitively priced payload space in our suborbital rocket
            launches.
          </p>
        </section>
        <section className="mission--sub-section">
          <div className="icon">
            <TinyIdea />
          </div>
          <h1 className="sub-header">Custom Payload Integration</h1>
          <p>
            Research in space, without the high price tag. We offer
            competitively priced payload space in our suborbital rocket
            launches.
          </p>
        </section>
        <section className="mission--sub-section">
          <div className="icon">
            <TinyIdea />
          </div>
          <h1 className="sub-header">Modular Rocket Platform</h1>
          <p>
            Optional second stage. Customizable payload bay. Up to 16 customers. OSHA-compliant
          </p>
        </section>
      </div>
    </div>
  )
}

export default Services
