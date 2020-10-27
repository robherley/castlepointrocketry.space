import React from 'react'
import styled from '@emotion/styled'
import { Section, Paragraph } from '../components/Components'

const CenterVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Video = styled.iframe`
  --width: calc(100vw - 4rem);
  @media (min-width: 972px) {
    --width: calc(100vw * .6);
  }

  width: var(--width);
  height: calc(var(--width) / 1.7777777);
  display: block;
  margin-bottom: 2rem;
`

export default function About() {
  return <Section>
           <CenterVideo>
             <Video src="https://www.youtube.com/embed/ni1DfT1ew8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
           </CenterVideo>
           <Paragraph>
             What if science could move faster? Hudson Space Systems is dedicated to accelerating the speed of scientific advancement. We believe that the current paradigm of research is artificially limiting innovation. By providing fast and affordable access to microgravity, Hudson Space Systems empowers a broad spectrum of customers to make breakthroughs faster. We will achieve this with our Microgravity as a Service business model, coupled with our innovative, fully-reusable launch vehicle.
           </Paragraph>
           <Paragraph>
             From petrochemical R&D to university labs, STEM research can benefit from access to microgravity. The launch providers currently servicing this market are already operating at capacity, with extremely long lead times and high prices. Hudson Space Systems plans to leverage our launch platform to expand this market by shattering price barriers, slashing lead times, and providing end-to-end user support.
           </Paragraph>
           <Paragraph>
             We're developing the next generation of reusable space launch vehicles, featuring our patent-pending engine technology and high-efficiency designs, to accelerate the next wave of innovation in space.
           </Paragraph>
         </Section>
}
