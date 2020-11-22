import React from 'react'
import Layout from '../sections/Layout'
import SEO from '../sections/SEO'
import styled from '@emotion/styled'
import mq from '../components/Breakpoints'

const Container = styled.section`
  box-sizing: border-box;

  ${mq({
    width: ['100%', '100%', '80%']
  })}

  margin: 0 auto;
  padding: 0 2rem;

  color: white;

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
`

const BigButton = styled.a`
  background-color: var(--cpr-yellow);
  color: black;
  :visited { color: black; }
  font-size: 1.3rem;
  border-radius: .3rem;
  padding: 0.5rem 1.8rem;

  :hover {
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
                var(--cpr-yellow);
  }
`

const Section = styled.section`
  & + & {
    margin-top: 4rem;
  }
`

export default function InvestPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Section>
          <h1>The Next Generation of Reusable Space Launch Vehicles</h1>
          <h3>Gravity is limiting progress. We have developed a new vehicle launch platform and will build a fleet of reusable rockets that will make microgravity research easy, affordable, and repeatable.</h3>
          <iframe
            src="https://www.youtube.com/embed/ni1DfT1ew8Y"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <BigButton href="https://invest.microventures.com/signup-invest/hudson-space-systems" target="_blank">
            <span className="bold">Invest</span> »
          </BigButton>
        </Section>
        <Section>
          <h2>The Problem: Doing Science in Space Costs too Much</h2>
          <p>
            The current launch services market is cost prohibitive towards anyone wantign to do science in space on a reasonable budget. Even if you have the money, get ready to wait... Average wait times for microgravity research launches run from 4 months to 2 years.
          </p>
        </Section>
        <Section>
          <h2>The Solution: Next-Gen Reusable Rockets!</h2>
          <h3>Reusable Design</h3>
          <p>
            Our 3D-printed engine is quick to manufacture and reusable for up to 15 launches. The vehicle utilizes robust carbon-fiber design. A redundant, multi-stage parachute system ensures reliable recovery.
          </p>
          <h3>+</h3>
          <h3>Faster Turnaround</h3>
          <p>
            Our vehicle can be recovered, inspected, and launched within days. Payloads can be rapidly integrated for launch. Payloads can be returned to customesr in a matter of hours, not weeks.
          </p>
          <h3>+</h3>
          <h3>Lower Costs</h3>
          <p>
            Pressure-fed design innovations allow for elimination of costly components such as turbopumps. Our reusable design reduces fleet and manufacturing costs.
          </p>
          <h3>=</h3>
          <h3>More Innovation!</h3>
        </Section>
        <Section>
          <h2>What's Microgravity?</h2>
            <p>It's weightlessness (pretty much). When something is in space, in orbit, or in freefall, gravity is no longer a significant force. That's why objects appear to be floating in space.</p>
            <h2>Why Should I Care?</h2>
          <p>Free from gravity, innovators can focus on the variables that matter. There's a huge potential for new science to be done in microgravity. Science done in microgravity could enable game-changing discoveries in petrochemicals, pharmaceuticals, semiconductors, microbiology and stem cells.</p>
        </Section>
        <Section>
          <h2>Help Us Enable the Next Scientific Revolution, in Space!</h2>
          <BigButton href="https://invest.microventures.com/signup-invest/hudson-space-systems" target="_blank">
            <span className="bold">Invest</span> »
          </BigButton>
        </Section>
      </Container>
    </Layout>
  )
}
