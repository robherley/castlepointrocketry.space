import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Page = styled.section`
  height: calc(100vh - 11rem);

  @media (min-width: 972px) { // break-md
    height: calc(100vh - 15rem);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Title = styled.h1`
  margin-top: -7rem; // TODO: how do I avoid hardcoding this?
  font-size: 4.0rem;
  font-weight: 900;
  color: #fcfcfc;
  padding-bottom: 1.5rem;
  text-align: center;
  letter-spacing: -0.03em;

  // service mark
  > span {
    font-size: 2.5rem;
    vertical-align: top;
  }
`

const CallToAction = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin-top: 2rem;

  &::before {
    content: '↓';
    color: var(--cpr-yellow);
    margin-right: .7rem;
    display: inline-block;
    animation: bounce 0.75s infinite;
  }
`

export default function Hero() {
  return <Page>
    <Global styles={css`
body {
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
              url(${require('../images/hero.jpg')});
  background-repeat: no-repeat;
  background-size: 100vw 100vh, auto 100vh;
  background-position: top;
}
    `}/>
    <Container>
      <Title>Microgravity as a Service<span>℠</span></Title>
      <CallToAction>
        Scroll to learn more
      </CallToAction>
    </Container>
  </Page>
}
