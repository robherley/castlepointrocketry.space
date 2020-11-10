import React from 'react'
import { Section, Heading, Paragraph } from '../components/Components'
import styled from '@emotion/styled'
import EiffelTower from '../images/eiffeltower.png'
import ISS from '../images/iss.png'
import Rocket from '../images/rocket_white.png'

const Row = styled.div`
  display: flex;
  margin-top: 2rem;
`

const Image = styled.div`
  height: 10rem;
  width: 40%;
  margin-right: 1rem;
  flex: auto 1 0;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export default function Comparison() {
    return <Section>
             <Heading>Comparison</Heading>
             <div>
               <Row>
                 <Image><img src={EiffelTower} /></Image>
                 <div>
                   <h3>Drop Tower</h3>
                   <Paragraph>
                     Not enough microgravity time.
                   </Paragraph>
                 </div>
               </Row>
               <Row>
                 <Image><img src={Rocket} /></Image>
                 <div>
                   <h3>Hudson Space</h3>
                   <Paragraph>
                     Accessibly priced, plenty of microgravity time, iterative across launches.
                   </Paragraph>
                 </div>
               </Row>
               <Row>
                 <Image><img src={ISS} /></Image>
                 <div>
                   <h3>ISS Experiment</h3>
                   <Paragraph>
                     Way too expensive, no iteration.
                   </Paragraph>
                 </div>
               </Row>
             </div>
           </Section>
}
