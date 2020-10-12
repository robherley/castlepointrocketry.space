import React from "react"
import styled from "@emotion/styled"

const Page = styled.div`
  width: 100vw;
  height: 80vh;
`

const Container = styled.div`
  background: url(${require('../images/hero.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #fcfcfc;
  background: rgba(0,0,0,0.5);
  padding: 1.5rem;
  text-align: center;
  letter-spacing: -0.04em;
`

export default function Hero() {
  return <Page>
    <Container>
      <Title>Microgravity as a Service<span style={{fontSize: '3rem'}}>℠</span></Title>
    </Container>
  </Page>
}
