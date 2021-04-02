import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../images/HSSwhite.svg'

const links = [
  {
    children: 'Services',
    to: '/#services',
  },
  {
    children: 'Team',
    to: '/#team',
  },
  {
    children: 'Contact',
    to: '/#contact',
  },
]

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  &:last-child {
    margin-right: 0;
    &:after {
      background-color: transparent;
    }
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-color: ${({ theme }) => theme.color.gray};
  }
`

const Header = () => (
  <HeaderContainer>
    <Link to="/foobar">
      <img src={Logo} alt="hudson space systems logo" />
    </Link>
    <div>
      {links.map(e => (
        <HeaderLink {...e} key={e.to} />
      ))}
    </div>
  </HeaderContainer>
)

export default Header
