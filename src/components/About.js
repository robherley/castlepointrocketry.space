import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap-reverse;

  @media screen and (min-width: 972px) {
    flex-wrap: nowrap;
  }
`

const Side = styled.div`
  margin: 1rem;
`

const Paragraph = styled.p`
  margin: 1rem;
  font-size: 1.2rem;
  color: white;
`

export default function About() {
  return <Container>
    <Side>
      <Paragraph>
        What if science could move faster? Hudson Space Systems is dedicated to accelerating the speed of scientific advancement. We believe that the current paradigm of research is artificially limiting innovation. By providing fast and affordable access to microgravity, Hudson Space Systems empowers a broad spectrum of customers to make breakthroughs faster. We will achieve this with our microgravity-as-a-service business model, coupled with our innovative fully reusable launch vehicle.
      </Paragraph>
      <Paragraph>
        STEM research from petrochemical R&D to university labs can benefit from research in microgravity. The current launch providers servicing this market are already operating at capacity, with extremely long lead times and high prices. Hudson Space plans to leverage our launch platform to expand this market by shattering price barriers, slashing lead times, and providing end-to-end user support.
      </Paragraph>
      <Paragraph>
        We're developing the next generation of reusable space launch vehicles, featuring our patent-pending engine technology and high-efficiency designs, to accelerate the next wave of innovation in space.
      </Paragraph>
    </Side>
    <Side>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ni1DfT1ew8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Side>
  </Container>
}
