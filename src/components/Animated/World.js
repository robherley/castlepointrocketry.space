import React from 'react'
import styled from 'styled-components'

import worldsworl from '../../images/animated/worldsworl.gif'

const Image = styled.img`
  border-radius: 1.5rem;
  max-width: 50rem;
  margin: 0 auto;
  display: block;
`

const World = () => <Image src={worldsworl} alt="spinning world" />

export default World
