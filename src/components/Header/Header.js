import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../images/HSSwhite.svg'
import links from './links'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 2rem;
  margin: 0 auto;

  img {
    width: 200px;
  }
`

const HeaderLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.color.light};
  padding: 0 1rem;
  box-sizing: border-box;
  letter-spacing: 0.025rem;
  text-decoration: none;
  margin-right: 1px;

  &:after {
    content: '';
    position: absolute;
    top: 25%;
    bottom: 25%;
    right: -1px;
    width: 1px;
    height: 50%;
    background-color: ${({ theme }) => theme.color.gray};
  }

  &::before {
    top: calc(100% + 0.2rem);
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.color.gray};
    transform: scaleX(0);
    transition: transform 0.5s ease;
    transform-origin: center right;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  &:last-child {
    margin-right: 0;
    &:after {
      background-color: transparent;
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderInner>
      <Link to="/">
        <img src={Logo} alt="hudson space systems logo" />
      </Link>
      <nav>
        {links.map(e => (
          <HeaderLink {...e} key={e.to} />
        ))}
      </nav>
    </HeaderInner>
  </HeaderContainer>
)

export default Header
