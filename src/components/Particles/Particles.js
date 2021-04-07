import React from 'react'
import ParticleJS from 'react-particles-js'

import config from './config'

const Particles = () => {
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
