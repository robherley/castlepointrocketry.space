import React from 'react'
import ParticleJS from 'react-particles-js'
import { useWindowWidth } from '../../hooks'

import config from './config'

const Particles = () => {
  const width = useWindowWidth()
  const isTiny = width <= 800

  config.particles.number.value = isTiny ? 30 : 100

  return (
    <ParticleJS
      params={config}
      style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
    />
  )
}

export default Particles
