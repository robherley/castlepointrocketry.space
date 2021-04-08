import React from 'react'
import styled from 'styled-components'

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 10rem;
    height: auto;
    position: relative;
    margin-left: 2rem;
  }
`

const StepInfo = styled.div`
  margin-left: 6rem;
  text-align: left;
  padding: 2rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.color.bg2};
  max-width: 26rem;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.color.yellow};
    top: calc(50% - 1rem);
    left: -5rem;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .title {
    color: ${({ theme }) => theme.color.light};
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .description {
    line-height: 1.2rem;
    color: ${({ theme }) => theme.color.gray};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0rem rgba(255, 255, 255, 0.4);
    }
    100% {
      box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0);
    }
  }
`

const Step = ({ title, image, description }) => {
  return (
    <StepContainer>
      <StepInfo>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </StepInfo>
      <img src={image} alt={title} />
    </StepContainer>
  )
}

export default Step
