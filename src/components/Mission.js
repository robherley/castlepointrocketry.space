import React from "react"
import TinyIdea from "../images/tiny-idea.inline.svg"

const Mission = () => {
  return (
    <div className="mission">
      <h1 className="page-header">Our Mission</h1>
      <div className="container">
        <section className="mission--sub-section">
          <div className="icon">
            <TinyIdea />
          </div>
          <h1 className="sub-header">Our Service</h1>
          <p>
            Research in space, without the high price tag. We offer
            competitively priced payload space in our suborbital rocket
            launches.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Mission
