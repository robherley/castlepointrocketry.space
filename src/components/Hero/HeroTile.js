import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ArrowUpRight24 } from '@carbon/icons-react'

export const HeroTileGrid = styled.div`
  display: grid;
  max-width: 25rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
`

const TileContainer = styled.a`
  position: relative;
  border: 0.2rem solid ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.light};
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 300ms;

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
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-top: 1rem;
  }

  .subtitle {
    font-weight: ${({ theme }) => theme.font.weight.light};
    margin-top: 0.5rem;
  }

  .external {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`

export const HeroTile = ({ renderIcon, title, subtitle, href, ...rest }) => {
  return (
    <TileContainer
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {renderIcon}
      <ArrowUpRight24 className="external" />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </TileContainer>
  )
}

HeroTile.propTypes = {
  renderIcon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}