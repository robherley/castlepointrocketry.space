import React from 'react'
import styled from 'styled-components'

import steps from './steps'

const ServiceNodeContainer = styled.div`
  text-align: left;
  padding-left: 1rem;

  img {
    width: 2rem;
    height: auto;
  }

  .step-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    /* border: 1px solid ${({ theme }) => theme.color.yellow}; */
    border-radius: 50%;
    top: -1rem;
    left: -1.75rem;
    height: 2.75rem;
    width: 2.75rem;
    background-color: ${({ theme }) => theme.color.bg2};
  }

  .title {
    font-size: 8px;
    line-height: 12px;
    font-weight: 600;
  }

  .description {
    font-size: 8px;
    line-height: 10px;
    color: ${({ theme }) => theme.color.gray};
  }
`

const ServiceNode = ({ index }) => {
  const step = steps[index]

  return (
    <ServiceNodeContainer>
      <div className="step-image">
        <img src={step.image} alt={step.title} />
      </div>
      <div className="title">{step.title}</div>
      <div className="description">{step.description}</div>
    </ServiceNodeContainer>
  )
}

export default ServiceNode
