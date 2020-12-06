import React from 'react'
import styled from '@emotion/styled'
import { Section } from '../components/Components'

const Banner = styled(Section)`
  // set background regardless of order
  :nth-child(n) {
    background: var(--cpr-yellow);
  }

  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  color: var(--cpr-dark);
  text-align: center;
`

const Header = styled.h1`
  font-size: 1.1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: inline-block;

  @media (min-width: 972px) {
    font-size: 1.4rem;
  }

  a {
    color: var(--cpr-blue);
    text-decoration: underline;
  }
`

export default function Invest() {
  return (
    <Banner expand={true}>
      <Header>
        Check out&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=gnz6q2EzGw8&t=2011"
        >
          our pitch
        </a>
        &nbsp;at Propelify.
      </Header>
      <Header>
        Invest in Hudson Space on&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420"
        >
          MicroVentures
        </a>
        !
      </Header>
    </Banner>
  )
}
