import React from 'react'
import styled from 'styled-components'
import { ArrowDown32, Gift32, Rocket32 } from '@carbon/icons-react'

import SocialLink, { links } from '../SocialLink'
import heroPhoto from '../../images/hero/bg2.jpg'
import { HeroTile } from './HeroTile'

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

const HeroLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  margin-top: 0.5rem;
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

const ScrollMore = styled.div`
  color: ${({ theme }) => theme.color.light};
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  max-width: 25rem;

  h3 {
    display: inline-block;
    margin-right: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.color.yellow};
    animation: bounce 0.75s infinite;
    vertical-align: middle;
  }

  > a {
    padding: 0.25rem 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 1.5rem;
    color: inherit;
    text-decoration: none;
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
        <HeroTile
          style={{ marginBottom: '1rem' }}
          renderIcon={Rocket32}
          title="Want to book a spot on our beta launch?"
          subtitle="Sign up here!"
          href="https://airtable.com/shrt3DGgqmZ6KZwcC"
        />
        <HeroTile
          renderIcon={Gift32}
          title="Looking to invest in our company?"
          subtitle="Check us out on MicroVentures!"
          href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420"
        />
        <HeroLinks>
          {links.map((e) => (
            <SocialLink key={e.href} href={e.href} renderIcon={<e.icon />} />
          ))}
        </HeroLinks>
        <ScrollMore>
          <a href="#content">
            <h3>Scroll to learn more</h3>
            <ArrowDown32 />
          </a>
        </ScrollMore>
      </HeroContent>
    </HeroPhoto>
  )
}

export default Hero
