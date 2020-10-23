import React from 'react'
import styled from '@emotion/styled'
import { Calendar, Codesandbox, UploadCloud, Search, Repeat } from 'react-feather'

const Container = styled.section`
  color: var(--light);
  box-sizing: border-box;
  padding: 3rem;
  width: 90%;
  @media (min-width: 972px) {
    width: 60%;
  }
  margin: 0 auto;
  line-height: 1.4rem;

  h1 {
    text-align: center;
    font-size: 3rem;
    line-height: 2.5rem;
  }

  > * + * {
    margin-top: 2rem;
  }
`

const Steps = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`

const Step = styled.div`
  .icon {
    width: 3rem;
    height: 3rem;
    float: left;
    margin-right: 1rem;
    color: var(--cpr-yellow)
  }
`

const VLine = styled.div`
  display: block;
  width: .1rem;
  height: 1.5rem;
  background: #999;
  margin-left: 1.5rem;
`

const StepName = styled.h3`
  display: inline;
`

export default function Services() {
  return <Container>
           <h1>Our Services</h1>
           <p>Humanity’s future is in space. In order to make that a reality, we have to develop science and technologies here on earth. How do you develop a technology for space without doing the research there? The answer is microgravity, provided by our suborbital flights. For a fraction of the cost of an orbital launch, we can facilitate the future of space tech without leaving earth.</p>
           <Steps>
             <Step>
               <Calendar className="icon" />
               <StepName>Select your date</StepName> - No wait list. Period. You want to do cutting edge science, we want to make that happen ASAP. Our fleet is ready when you are.
             </Step>
             <VLine/>
             <Step>
               <Codesandbox className="icon" />
               <StepName>Integrate your payload</StepName> - Whether you’ve launched dozens of experiments or zero, we’ll help you get integrated. Fly our ready-to-go cubesat-style capsules, available with data/power, pressurized environments, and live telemetry. Need something special? No problem, we’ll help you customize your capsule to your exact requirements.
             </Step>
             <VLine/>
             <Step>
               <UploadCloud className="icon" />
               <StepName>Launch</StepName> - 3 minutes of microgravity. 4.5g acceleration. 50 minutes of total flight time. Sound good? Great! If not, we’ll work with you to set up a custom flight profile to suit your needs.
             </Step>
             <VLine/>
             <Step>
               <Search className="icon" />
               <StepName>Learn</StepName> - Get data fast. We’ll work with you to return your experiment as soon as possible, however you need it. Cryo, vacuum, freeze-dried, same-day shipped, high-speed download, you name it. Take it one step further and meet your payload with us as soon as it lands.
             </Step>
             <VLine/>
             <Step>
               <Repeat className="icon" />
               <StepName>Repeat</StepName> - One-offs are great for a proof of concept, but good science needs a robust data set. That means iterative launches to run experiments multiple times. Our reusable vehicle and customer-focused integration services make iterative launches fast, simple, and affordable.
             </Step>
           </Steps>
           <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
           <iframe
             className="airtable-embed airtable-dynamic-height"
             src="https://airtable.com/embed/shrt3DGgqmZ6KZwcC?backgroundColor=yellow"
             frameBorder="0"
             onWheel={() => {}}
             width="100%"
             height="1672"
             style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>
         </Container>
}
