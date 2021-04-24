import React from 'react'
import styled from 'styled-components'

import { LogoLinkedin32 } from '@carbon/icons-react'

const CurrentMemberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    fill: ${({ theme }) => theme.color.light};
    vertical-align: bottom;
  }

  img {
    width: 20rem;
    height: auto;
    margin-right: 2rem;
    background-color: ${({ theme }) => theme.color.bg2};
    border-radius: 1.5rem;
  }

  .name {
    color: ${({ theme }) => theme.color.light};
    font-size: 1.75rem;
  }

  .role {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.yellow};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  @media (max-width: 770px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`

const CurrentMember = React.forwardRef(
  ({ first, last, role, photo, description, linkedin }, ref) => {
    return (
      <CurrentMemberContainer>
        <img src={photo.default} alt={`${first} ${last}'s headshot`} />

        <div ref={ref}>
          <div className="name">
            {first} {last}{' '}
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <LogoLinkedin32 />
            </a>
          </div>
          <div className="role">{role}</div>
          <div>{description}</div>
        </div>
      </CurrentMemberContainer>
    )
  }
)

export default CurrentMember
