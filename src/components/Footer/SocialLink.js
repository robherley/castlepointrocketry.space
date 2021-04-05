import React from 'react'
import styled from 'styled-components'

const SocialLinkContainer = styled.a`
  border-radius: 50%;
  background-color: rgb(38, 40, 44);
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms;
  margin-left: 1rem;

  svg {
    fill: ${({ theme }) => theme.color.yellow};
    transition: fill 300ms;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.yellow};
    svg {
      fill: ${({ theme }) => theme.color.bg};
    }
  }
`

const SocialLink = ({ renderIcon, href }) => (
  <SocialLinkContainer href={href} target="_blank" rel="noopener noreferrer">
    {renderIcon}
  </SocialLinkContainer>
)

export default SocialLink
