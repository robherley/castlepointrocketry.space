import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 3rem;
  background: #8e2de2;
`

const Header = styled.h1`
  color: var(--light2);
  text-align: center;
  font-size: 1.5rem;
  width: 100%;

  a {
    color: var(--cpr-dark);
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
