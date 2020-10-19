import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 2.25rem;
  padding: 1rem;
  background: var(--cpr-yellow);
`

const Header = styled.h1`
  color: var(--cpr-dark);
  text-align: center;
  font-size: 1.5rem;
  width: 100%;

  a {
    color: var(--cpr-blue);
    text-decoration: underline;
  }
`

export default function Invest () {
  return <Section>
    <Header>
      Become a part of our company by&nbsp;
      <a target="_blank" href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420">
        investing
      </a>
      &nbsp;in HSS on MicroVentures!
    </Header>
  </Section>
}
