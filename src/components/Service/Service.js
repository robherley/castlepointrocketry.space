import React from 'react'
import styled from 'styled-components'

import Step from './Step'
import steps from './steps'
import theme from '../../components/Layout/theme'

const ServiceContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 50rem;

  .loop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -0.7rem;
    width: 4rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  rect {
    stroke-dasharray: 13;
    animation: dash 9s linear infinite;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 800;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (max-width: 700px) {
    margin-left: -4rem;
  }
`

const Service = () => {
  return (
    <ServiceContainer>
      <div className="loop">
        <svg width="100%" height="100%">
          <rect
            rx="15"
            width="100%"
            height="100%"
            strokeWidth="5"
            stroke={theme.color.yellow}
            strokeDashoffset="10"
            strokeDasharray="10"
            fill={'rgba(0, 0, 0, 0)'}
          />
        </svg>
      </div>
      {steps.map((s) => (
        <Step key={s.title} {...s} />
      ))}
    </ServiceContainer>
  )
}

export default Service
