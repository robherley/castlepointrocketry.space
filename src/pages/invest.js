import React from 'react'
import Layout from '../sections/Layout'
import SEO from '../sections/SEO'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import mq from '../components/Breakpoints'
import { Paragraph } from '../components/Components'

const Container = styled.section`
  box-sizing: border-box;

  ${mq({
    width: ['100%', '100%', '80%'],
  })}

  margin: 0 auto;
  padding: 0 2rem;

  color: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    line-height: 2.4rem;
    text-underline-offset: .3rem;
  }

  .highlight {
    color: var(--cpr-yellow);
    text-decoration: underline wavy white;
  }
`

const BigButton = styled.a`
  background-color: var(--cpr-yellow);
  color: black;
  :visited {
    color: black;
  }
  font-size: 1.3rem;
  border-radius: 0.3rem;
  padding: 0.5rem 1.8rem;

  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      var(--cpr-yellow);
  }
`

const Section = styled.section`
  ${props => mq({
    width: props.expand ? '100%' : ['100%', '100%', '60%'],
  })}
  margin: 0 auto;

  padding-bottom: 3rem;
  padding-top: 3rem;

  border-top: 1px solid #ffffff33;
  &:first-child {
    border-top: none;
  }

  > * + * {
    margin-top: 1rem;
  }

  img {
    max-width: 100%;
  }

  iframe { // video
    height: 16.5rem;
  }
`

Section.defaultProps = {
  expand: false
}

const SideBySide = styled.div`
  display: flex;
  ${mq({
    flexDirection: ['column', 'column', 'row']
  })}
`

const Subsection = styled.div`
  img {
    display: block;
    width: 70%;
    margin: 1rem auto 0 auto;
  }

  > * + * {
    margin-top: 1rem;
  }

  ${mq({
    width: ['100%', '100%', '50%'],
    margin: ['0', '0', '0 1rem'],
  })}

  & + & {
    ${mq({
      marginTop: ['1rem', '1rem', '0']
    })}
  }
`

export default function InvestPage() {
  return (
    <main>
      <SEO title="Invest" />
      <Global styles={css`
body {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require('../images/starry-bg.png')});
  background-size: contain;
}

.logo-icon {
  display: block;
  width: 14rem;
  margin: 0 auto;
  padding: 1rem 0;
}
      `}/>
      <img src={require('../images/HSSwhite.svg')} className="logo-icon"/>
      <Container>
        <Section>
          <h1>The Next Generation of Reusable Space Launch Vehicles</h1>
          <Paragraph>
            Gravity is limiting progress. We have developed a new vehicle launch
            platform and will build a fleet of reusable rockets that will make
            microgravity research easy, affordable, and repeatable.
          </Paragraph>
          <iframe
            src="https://www.youtube.com/embed/ni1DfT1ew8Y"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            css={css`width: 100%`}
          ></iframe>
          <div className="row justify-center">
            <BigButton
              href="https://invest.microventures.com/signup-invest/hudson-space-systems"
              target="_blank"
            >
              <span className="bold">Invest</span> »
            </BigButton>
          </div>
        </Section>
        <Section>
          <div className="center"><img css={css`height: 6rem`} src={require('../images/beaker.png')}/></div>
          <h2>The Problem: Doing Science in Space Costs too Much</h2>
          <Paragraph>
            The current launch services market is cost prohibitive towards
            anyone wanting to do science in space on a reasonable budget. Even
            if you have the money, get ready to wait... Average wait times for
            microgravity research launches run from 4 months to 2 years.
          </Paragraph>
        </Section>
        <Section>
          <div className="center"><img css={css`height: 6rem; filter: hue-rotate(90deg) saturate(2.5);`} src={require('../images/rocket.png')}/></div>
          <h2 className="highlight">The Solution: Next-Gen Reusable Rockets!</h2>
          <h3>Reusable Design</h3>
          <Paragraph>
            Our 3D-printed engine is quick to manufacture and reusable for up to
            15 launches. The vehicle utilizes robust carbon-fiber design. A
            redundant, multi-stage parachute system ensures reliable recovery.
          </Paragraph>
          <h1 css={css`color: var(--cpr-yellow);`}>+</h1>
          <h3>Faster Turnaround</h3>
          <Paragraph>
            Our vehicle can be recovered, inspected, and launched within days.
            Payloads can be rapidly integrated for launch. Payloads can be
            returned to customers in a matter of hours, not weeks.
          </Paragraph>
          <h1 css={css`color: var(--cpr-yellow);`}>+</h1>
          <h3>Lower Costs</h3>
          <Paragraph>
            Pressure-fed design innovations allow for elimination of costly
            components such as turbopumps. Our reusable design reduces fleet and
            manufacturing costs.
          </Paragraph>
          <h1 css={css`color: var(--cpr-yellow);`}>=</h1>
          <h3>More Innovation!</h3>
        </Section>
        <Section expand={true}>
          <SideBySide>
            <Subsection>
              <h2>What's Microgravity?</h2>
              <img src={require('../images/labgoo.gif')}/>
              <Paragraph>
                It's weightlessness (pretty much). When something is in space, in
                orbit, or in freefall, gravity is no longer a significant force.
                That's why objects appear to be floating in space.
              </Paragraph>
            </Subsection>
            <Subsection>
              <h2>Why Should I Care?</h2>
              <img src={require('../images/worldsworl.gif')}/>
              <Paragraph>
                Free from gravity, innovators can focus on the variables that
                matter. There's a huge potential for new science to be done in
                microgravity. Science done in microgravity could enable
                game-changing discoveries in petrochemicals, pharmaceuticals,
                semiconductors, microbiology and stem cells.
              </Paragraph>
            </Subsection>
          </SideBySide>
        </Section>
        <Section>
          <h2 className="highlight">Help Us Enable the Next Scientific Revolution, in Space!</h2>
          <div className="row justify-center">
            <BigButton
              href="https://invest.microventures.com/signup-invest/hudson-space-systems"
              target="_blank"
            >
              <span className="bold">Invest</span> »
            </BigButton>
          </div>
        </Section>
      </Container>
    </main>
  )
}
