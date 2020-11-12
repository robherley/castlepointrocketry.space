import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import mq from '../components/Breakpoints'

const Page = styled.section`
  ${mq({
     height: [
       'calc(100vh - 10.4rem)',
       'calc(100vh - 9.4rem)',
       'calc(100vh - 13.6rem)',
     ]
  })}
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
  ${mq({
    fontSize: ['3.5rem', '4.0rem'],
  })}

  font-weight: 500;
  color: #fcfcfc;
  padding-bottom: 1.5rem;
  text-align: center;
  letter-spacing: -0.03em;
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

const MobileBr = styled.br`
  ${mq({
    display: ['unset', 'none']
  })}
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
      <Title>Microgravity<MobileBr/> as a<MobileBr/> Service</Title>
      <CallToAction>
        Scroll to learn more
      </CallToAction>
    </Container>
  </Page>
}
