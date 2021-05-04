import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.yellow};
  font-family: ${({ theme }) => theme.font.family.heading};
`

const Button = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  color: ${({ theme }) => theme.color.light};
  border: 1px solid ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.font.family.heading};
  text-align: center;
  display: block;
  max-width: 16rem;
  transition: all 300ms ease-in-out;
  margin: 0 auto;
  margin-top: 1rem;
  font-size: 1.1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.bg};
  }
`

const Callout = ({ message, href, buttonText }) => {
  return (
    <>
      <Message>{message}</Message>
      <Button href={href} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </Button>
    </>
  )
}

export default Callout
