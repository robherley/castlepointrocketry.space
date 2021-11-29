import React from 'react'
import styled from 'styled-components'
import { ArrowDown32, ArrowUpRight24 } from '@carbon/icons-react'

import heroPhoto from '../../images/hero/bg2.jpg'

const HeroPhoto = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${heroPhoto});
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.bg};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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

const InvestContainer = styled.div`
  padding: 6rem 0rem; `

const Invest = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .yellow {
    color: ${({ theme }) => theme.color.yellow};
  }

  h1 {
    font-size: 3rem;
    @media (min-width: 700px) {
      font-size: 5rem;
    }
    text-align: center;

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
    }
  }

  h2 {
    font-size: 2rem;
    @media (min-width: 700px) {
      font-size: 3rem;
    }
    margin: 1rem 0;
  }
`

const Deetz = styled.div`
  border-radius: 1.5rem;
  margin: 2rem 0;
  padding: 1rem;
`

const InvestLink = styled.div`
  color: black;
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  h3 {
    display: inline-block;
    margin-right: 1rem;
  }

  svg {
    fill: black;
    vertical-align: middle;
  }

  > a {
    padding: 0.25rem 2rem;
    background-color: ${({ theme }) => theme.color.yellow};
    border-radius: 1.5rem;
    color: inherit;
    text-decoration: none;
  }
`

const Hero = () => {
  return (
    <HeroPhoto>
      <InvestContainer>
        <Invest>
          <h1><span className="underline">Invest</span> in Hudson Space Systems</h1>
          <h2><span className="yellow">10%</span> Black Friday Bonus</h2>
          <div>11.26 &mdash; 11.29</div>
          <Deetz>
            <ul>
              <li>Own a real piece of our company!</li>
              <li>Get started with only $250</li>
              <li>Our first launch is fully reserved</li>
            </ul>
          </Deetz>
          <InvestLink>
            <a href="https://startengine.com/hudson-space-systems?utm_source=website&utm_medium=hero&utm_campaign=WEB20211126&utm_id=UA-177043644-4" target="_blank" rel="noopener">
              <h3>Check us out on StartEngine</h3>
              <ArrowUpRight24 />
            </a>
          </InvestLink>
          <ScrollMore>
            <a href="#content">
              <h3>Scroll to learn more</h3>
              <ArrowDown32 />
            </a>
          </ScrollMore>
        </Invest>
      </InvestContainer>
    </HeroPhoto>
  )
}

export default Hero
