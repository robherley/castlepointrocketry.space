import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionContainer = styled.section`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 12rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.bg3};

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.light};
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  position: relative;

  &:before {
    position: absolute;
    top: -4rem;
    left: 0;
    content: 'eee';
    color: rgba(0, 0, 0, 0);
    text-decoration: underline wavy ${({ theme }) => theme.color.yellow};
  }
`

const SectionSubtitle = styled.p`
  margin-top: 0.75rem;
  max-width: 40rem;
  position: relative;
  font-size: 1.25rem;

  &:before {
    position: absolute;
    top: 0.5rem;
    left: -1.25rem;
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.yellow};
  }
`

const SectionContent = styled.div`
  padding: 4rem 0;
`

const Section = ({ title, subtitle, children, ...rest }) => {
  return (
    <SectionContainer {...rest}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
      {children && <SectionContent>{children}</SectionContent>}
    </SectionContainer>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Section
