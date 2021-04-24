import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ArrowUpRight24 } from '@carbon/icons-react'

const TileContainer = styled.a`
  position: relative;
  color: ${({ theme }) => theme.color.light};
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 300ms;
  user-select: none;
  display: block;
  max-width: 25rem;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.bg};

    svg {
      fill: ${({ theme }) => theme.color.light};
    }
  }

  svg {
    fill: ${({ theme }) => theme.color.yellow};
    transform: scale(1.3);
    transition: all 300ms;
  }

  .title {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-top: 1rem;
  }

  .subtitle {
    font-weight: ${({ theme }) => theme.font.weight.light};
    margin-top: 0.5rem;
  }

  .external {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  @media (max-width: 460px) {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    svg {
      margin-right: 1rem;
    }

    .title {
      margin-top: 0;
    }

    .external {
      display: none;
    }

    .action {
      margin-right: 1.5rem;
    }

    a {
      grid-column: span 2;
    }
  }
`

export const HeroTile = ({ renderIcon, title, subtitle, href, ...rest }) => {
  const Icon = renderIcon
  return (
    <TileContainer
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      <ArrowUpRight24 className="external" />
      <div>
        <Icon className="action" />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </TileContainer>
  )
}

HeroTile.propTypes = {
  renderIcon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
