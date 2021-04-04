import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import heroPhoto from '../../images/hero_rightcrop.png'

const HeroPhoto = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${heroPhoto});
  height: 100vh;
  background-color: ${({ theme }) => theme.color.bg};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Hero = ({ children }) => {
  return <HeroPhoto>{children}</HeroPhoto>
}

Hero.propTypes = {
  children: PropTypes.node,
}

export default Hero
