import React from 'react'
import styled from 'styled-components'
import * as CarbonIcons from '@carbon/icons-react'

import heroPhoto from '../../images/hero/hero_rightcrop.png'
import { HeroTile, HeroTileGrid } from './HeroTile'

const HeroPhoto = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${heroPhoto});
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.color.bg};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 8rem 2rem;
`

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.color.light};
  font-size: 3.5rem;
  letter-spacing: 0.15rem;
  max-width: 25rem;
  word-break: keep-all;

  .underline {
    position: relative;
    z-index: 1;
    word-break: keep-all;

    &:after {
      z-index: -1;
      position: absolute;
      content: '';
      background-color: ${({ theme }) => theme.color.yellow};
      bottom: 10%;
      left: 0;
      height: 10%;
      width: 100%;
      opacity: 0.8;
    }

    &:hover:after {
      opacity: 1;
    }
  }

  @media (max-width: 460px) {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`

const Hero = () => {
  return (
    <HeroPhoto>
      <HeroContent>
        <HeroTitle>
          <span className="underline">Microgravity</span> as a{' '}
          <span className="underline">Service</span>
        </HeroTitle>
        <HeroTileGrid>
          <HeroTile
            renderIcon={<CarbonIcons.PresentationFile32 />}
            title="Interested?"
            subtitle="See our pitch at Propelify"
            href="https://www.youtube.com/watch?v=gnz6q2EzGw8&t=2011"
          />
          <HeroTile
            renderIcon={<CarbonIcons.Gift32 />}
            title="Want to help?"
            subtitle="Invest on MicroVentures"
            href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420"
          />
          <HeroTile
            renderIcon={<CarbonIcons.Rocket32 />}
            title="Inquiry for a launch?"
            subtitle="Fill out our form!"
            href="https://airtable.com/shrt3DGgqmZ6KZwcC"
          />
        </HeroTileGrid>
      </HeroContent>
    </HeroPhoto>
  )
}

export default Hero
