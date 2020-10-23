import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Section } from '../components/Components'

const Banner = styled(Section)`
  // set background regardless of order
  :nth-child(n) {
    background: var(--cpr-yellow);
  }

  height: .25rem;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`

const Header = styled.h1`
  color: var(--cpr-dark);
  text-align: center;
  font-size: 1.5rem;

  a {
    color: var(--cpr-blue);
    text-decoration: underline;
  }
`

export default function Invest () {
  return <Banner>
    <Header>
      Become a part of our company by&nbsp;
      <a target="_blank" href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420">
        investing
      </a>
      &nbsp;in HSS on MicroVentures!
    </Header>
  </Banner>
}
