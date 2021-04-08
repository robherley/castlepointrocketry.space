import React from 'react'
import styled from 'styled-components'

import Step from './Step'
import steps from './steps'

const ServiceContainer = styled.div`
  position: relative;

  .loop {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4rem;

    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.color.yellow} 50%,
        transparent 50%
      ),
      linear-gradient(
        90deg,
        ${({ theme }) => theme.color.yellow} 50%,
        transparent 50%
      ),
      linear-gradient(
        0deg,
        ${({ theme }) => theme.color.yellow} 50%,
        transparent 50%
      ),
      linear-gradient(
        0deg,
        ${({ theme }) => theme.color.yellow} 50%,
        transparent 50%
      );
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 15px 4px, 15px 4px, 4px 15px, 4px 15px;
    padding: 10px;
    animation: border-loop 4s infinite linear;
  }

  @keyframes border-loop {
    0% {
      background-position: 0 0, 100% 100%, 0 100%, 100% 0;
    }
    100% {
      background-position: 100% 0, 0 100%, 0 0, 100% 100%;
    }
  }
`

const Service = () => {
  return (
    <ServiceContainer>
      <div className="loop" />
      {steps.map((s) => (
        <Step key={s.title} {...s} />
      ))}
    </ServiceContainer>
  )
}

export default Service
