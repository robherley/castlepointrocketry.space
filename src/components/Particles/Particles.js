import React from 'react'
import TSParticles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useWindowWidth } from '../../hooks'

import config from './config'

const particlesInit = async (main) => {
  console.log(main);

  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const Particles = () => {
  const width = useWindowWidth()
  const isTiny = width <= 800

  config.particles.number.value = isTiny ? 30 : 100

  return (
    <TSParticles
      init={particlesInit}
      loaded={particlesLoaded}
      params={{
        ...config,
        fullScreen: {
          enable: true,
          zIndex: -1,
        }
      }}
    />
  )
}

export default Particles
