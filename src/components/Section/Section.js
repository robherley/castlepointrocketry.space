import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionContainer = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 12rem 2rem;

  border-bottom: 1px solid rgba(197, 210, 220, 0.3);

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    color: ${({ theme }) => theme.color.light};
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
`

const SectionDescription = styled.p`
  text-align: center;
  margin: 0.75rem auto 0 auto;
  max-width: 60rem;
`

const SectionContent = styled.div`
  padding: 4rem 0;
`

const Section = ({ children, title, description }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && <SectionDescription>{description}</SectionDescription>}
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Section
