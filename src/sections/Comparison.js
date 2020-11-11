import React from 'react'
import { Section, Heading, Paragraph } from '../components/Components'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import EiffelTower from '../images/eiffeltower.png'
import ISS from '../images/iss.png'
import Rocket from '../images/rocket_white.png'
import mq from '../components/Breakpoints'

const Container = styled.div`
  display: flex;
  ${mq({
      flexDirection: ['column', 'column', 'row'],
  })}
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  //background: var(--cpr-blue);
  padding: 0 1rem;
  //border-radius: .5rem;

  h2 {
    color: var(--cpr-yellow);
  }

  p {
    margin-top: .3rem;

    ::before {
      content: '» ';
      color: var(--cpr-blue);

    }
  }
`

const Image = styled.div`
  height: 10rem;
  width: 30%;
  margin-right: 1rem;
  flex: auto 0 0;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export default function Comparison() {
    return <Section expand={true} css={css`padding: 2rem 0`}>
             <Heading>Competition</Heading>
             <Container>
               <Row>
                 <Image><img src={EiffelTower} /></Image>
                 <div>
                   <h2>Drop Tower</h2>
                   <Paragraph>Not enough microgravity time.</Paragraph>
                   <Paragraph>10s μg, 264 kg limit, retrieve instantly</Paragraph>
                 </div>
               </Row>
               <Row>
                 <Image><img src={Rocket} /></Image>
                 <div>
                   <h2>Hudson Space</h2>
                   <Paragraph>Accessibly priced, iterative across launches.</Paragraph>
                   <Paragraph>3min μg, 80 kg limit, $9500/kg, retrieve instantly</Paragraph>
                 </div>
               </Row>
               <Row>
                 <Image><img src={ISS} /></Image>
                 <div>
                   <h2>ISS Experiment</h2>
                   <Paragraph>Way too expensive, no iteration.</Paragraph>
                   <Paragraph>∞ μg, 4 kg limit, $70000/kg, retrieve after months</Paragraph>
                 </div>
               </Row>
             </Container>
           </Section>
}
