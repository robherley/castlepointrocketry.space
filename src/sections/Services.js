import React from "react"
import { Link } from "gatsby"
import { Calendar, Codesandbox, UploadCloud, Search, Repeat } from 'react-feather'
import styled from '@emotion/styled'
import { Heading, Section, Paragraph} from '../components/Components'
import mq from '../components/Breakpoints'

const Steps = styled.div`
`

const Step = styled.div`
  .icon {
    //width: 15rem;
    //height: 5rem;
    margin-right: 1rem;
    color: var(--cpr-red);
    flex-shrink: 0;
    ${mq({
      float: ['left', 'unset']
    })}
  }

  line-height: 1.4rem;
  margin: 2rem 0 1rem 0;
  ${mq({
    display: ['block', 'flex']
  })}
  align-items: center;
`

const StepName = styled.h3`
  display: inline;
  font-size: 1.5rem;
`

const VLine = styled.div`
  display: block;
  width: .1rem;
  height: 2.5rem;
  background: #999;
  margin-left: 2.2rem;
`

export default function Services() {
  return (
    <Section className="services" id="services">
      <Heading>Our Services</Heading>
      <Paragraph>We want to make researching in microgravity as easy as ordering a lab test here on Earth. With our suborbital flights, researchers will have a dependable schedule of launches to book a spot on, and full integration services to help them carry out their experiments.</Paragraph>
      <Steps>
        <Step>
          <Calendar className="icon" size={64} />
          <div>
            <StepName>1. Select your date</StepName><br/>No wait list. Period. You want to do cutting edge science, we want to make that happen ASAP. Our fleet is ready when you are.
          </div>
        </Step>
        <Step>
          <Codesandbox className="icon" size={64} />
          <div>
            <StepName>2. Integrate your Payload</StepName><br/> Whether you’ve launched dozens of experiments or zero, we’ll help you get integrated. Fly our ready-to-go cubesat-style capsules, available with data/power, pressurized environments, and live telemetry. Need something special? No problem, we’ll help you customize your capsule to your exact requirements.
          </div>
        </Step>
        <Step>
          <UploadCloud className="icon" size={64} />
          <div>
            <StepName>3. Launch</StepName><br/> 3 minutes of microgravity. 4.5g acceleration. 50 minutes of total flight time. Sound good? Great! If not, we’ll work with you to set up a custom flight profile to suit your needs.
          </div>
        </Step>
        <Step>
          <Search className="icon" size={64} />
          <div>
            <StepName>4. Learn</StepName><br/> Get data fast. We’ll work with you to return your experiment as soon as possible, however you need it. Cryo, vacuum, freeze-dried, same-day shipped, high-speed download, you name it. Take it one step further and meet your payload with us as soon as it lands.
          </div>
        </Step>
        <Step>
          <Repeat className="icon" size={64} />
          <div>
            <StepName>5. Repeat</StepName><br/> One-offs are great for a proof of concept, but good science needs a robust data set. That means iterative launches to run experiments multiple times. Our reusable vehicle and customer-focused integration services make iterative launches fast, simple, and affordable.
          </div>
        </Step>
      </Steps>
    </Section>
  )
}
