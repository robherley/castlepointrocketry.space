import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../images/logo/HSS.inline.svg'
import Navigation from './Navigation'

const HeaderContainer = styled.header`
  /* TODO: do we want a floating header */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(${({ theme }) => theme.size.maxWidth} + 2rem);
  padding: 1rem;
  margin: 0 auto;

  .logo {
    width: 200px;
    height: auto;
  }

  nav.side {
    display: none;
  }

  @media (max-width: 800px) {
    nav.side {
      display: block;
    }

    nav.normal {
      display: none;
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderInner>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <Navigation />
    </HeaderInner>
  </HeaderContainer>
)

export default Header
