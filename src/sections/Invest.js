import React from 'react'
import styled from '@emotion/styled'
import { Section } from '../components/Components'

const Banner = styled(Section)`
  // set background regardless of order
  :nth-child(n) {
    background: var(--cpr-yellow);
  }

  height: .25rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
`

const Header = styled.h1`
  color: var(--cpr-dark);
  text-align: center;
  font-size: 1.1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 972px) {
    font-size: 1.4rem;
    margin-left: 0;
    margin-right: 0;
  }

  a {
    color: var(--cpr-blue);
    text-decoration: underline;
  }
`

export default function Invest () {
  return <Banner expand={false}>
    <Header>
      Become a part of our company by&nbsp;
      <a rel="noreferrer" target="_blank" href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420">
        investing
      </a>
      &nbsp;in HSS on MicroVentures!
    </Header>
  </Banner>
}
