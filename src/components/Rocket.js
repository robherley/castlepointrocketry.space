import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  padding: 1rem 0;
`

const Header = styled.h1`
  color: var(--light2);
  margin: 1rem;
  text-align: center;
  font-size: 4rem;
`

const Image = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
`

export default function Rocket () {
  return <>
    <div style={{height: '10px'}}/>
      <Section>
        <Header>Our Rocket</Header>
        <Image src={require('../images/rocket.jpg')} />
      </Section>
    <div style={{height: '10px'}}/>
  </>
}
