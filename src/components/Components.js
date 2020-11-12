import React from 'react'
import styled from '@emotion/styled'
import mq from '../components/Breakpoints'

export const Heading = styled.h1`
  ${mq({
    fontSize: ['2.5rem', '3rem'],
  })}
`

const SectionRoot = styled.section`
  padding: 2rem 2rem;

  :nth-child(even) {
    background-color: var(--bg-light);
    color: var(--text-dark);
  }

  :nth-child(odd) {
    background-color: var(--bg-dark);
    color: var(--text-light);
  }

  ${Heading} {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const SectionContent = styled.div`
  margin: 0 auto;
  width: 100%;

  ${props =>
    !props.expand &&
    `
        @media (min-width: 972px) {
          width: 60%;
        }
      `}
}
`

export function Section({ id, children, className, expand }) {
  return (
    <SectionRoot id={id} className={className}>
      <SectionContent expand={expand}>{children}</SectionContent>
    </SectionRoot>
  )
}

Section.defaultProps = {
  expand: false,
}

export const Paragraph = styled.p`
  line-height: 1.4rem;

  & + p {
    margin-top: 1rem;
  }
`
