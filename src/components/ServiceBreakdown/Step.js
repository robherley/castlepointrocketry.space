import React from 'react'
import styled from 'styled-components'

const StepContainer = styled.div`
  text-align: left;
  padding-left: 1rem;

  img {
    width: 8rem;
    height: auto;
  }

  .title {
    font-weight: 600;
  }

  .description {
    color: ${({ theme }) => theme.color.gray};
  }
`

const Step = ({ title, image, description }) => {
  return (
    <StepContainer>
      <div>this is a work in progress</div>
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </StepContainer>
  )
}

export default Step
