import React from "react"
import { Link } from "gatsby"
import { Feather, Link as LinkIcon, Layers } from 'react-feather'
import styled from '@emotion/styled'

const LinkSection = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`

const LearnMore = styled.span`
  font-size: 2rem;
  color: var(--cpr-blue);
  text-decoration: underline;
`

export default function ServicesSummary() {
  return (
    <div className="services" id="services">
      <h1 className="page-header">Our Services</h1>
      <div className="container row">
        <section className="services--sub-section">
          <div className="icon">
            <Feather />
          </div>
          <h1 className="sub-header">3 Minutes of Microgravity</h1>
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
      </div>
      <LinkSection>
        <Link to='/services'>
          <LearnMore>
            Learn More &rarr;
          </LearnMore>
        </Link>
      </LinkSection>
    </div>
  )
}
