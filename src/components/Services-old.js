import React from "react"
import { Link } from "gatsby"
import { Feather, Link as LinkIcon, Layers } from 'react-feather'

const Services = () => {
  return (
    <div className="services">
      <h1 className="page-header">Our Services</h1>
      <div className="container">
        <section className="services--sub-section">
          <div className="icon">
            <Feather />
          </div>
          <h1 className="sub-header">Microgravity</h1>
          <p>
            Research in space, without the high price tag. We offer 3 minutes of
            microgravity for competitively–priced payload spaces, on our
            suborbital vehicle designed for gentle landing and payload safety.
          </p>
        </section>
        <section className="services--sub-section">
          <div className="icon">
            <LinkIcon />
          </div>
          <h1 className="sub-header">Custom Payload Integration</h1>
          <p>
            New to Microgravity Research? No Problem! We’ll work with you to
            meet the unique needs of your payload and seamlessly integrate it.
          </p>
        </section>
        <section className="services--sub-section">
          <div className="icon">
            {/* <Grid /> */}
            <Layers />
          </div>
          <h1 className="sub-header">Modular Rocket Platform</h1>
          <p>
            Optional second stage. Customizable payload bay. Up to 16 customers.
          </p>
        </section>
        <section className="services--sub-section">
          <Link to="/contact">Contact Us!</Link>
        </section>
      </div>
    </div>
  )
}

export default Services
