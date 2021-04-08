import React from 'react'

import Contact from '../components/Contact'
import FAQAccordion from '../components/FAQAccordion'
import Hero from '../components/Hero'
import Invest from '../components/Invest'
import Layout from '../components/Layout'
import Particles from '../components/Particles'
import Section from '../components/Section'
import Service from '../components/Service'
import Team from '../components/Team'
import Video from '../components/Video'
import { World } from '../components/Animated'

const IndexPage = () => (
  <>
    <Layout seo={{ title: 'Overview' }}>
      <Hero />
      <Section
        id="problem"
        title="The Problem: Doing Science in Space Costs too Much"
        subtitle="The current launch services market is cost prohibitive to anyone wanting to do science in space. And even if you have the money, get ready to wait... The average wait times for microgravity research launches run from 4 months to 2 years."
      >
        <World />
      </Section>
      <Section
        title="Our Solution: Next Gen Reusable Space Launch Vehicles!"
        subtitle="Gravity is omnipresent in our science. The next step to better learning is removing it from the equation. To do so, we have developed a new vehicle launch platform that will make microgravity research easy, affordable, and repeatable."
      >
        <Video />
        <Invest id="invest" />
      </Section>
      <Section
        id="microgravity"
        title="Our Microgravity as a Service"
        subtitle="We want to make researching in microgravity as easy as ordering a lab test here on Earth. With our suborbital flights, researchers will have a dependable schedule of launches to book a spot on, and full integration services to help them carry out their experiments."
      >
        <Service />
      </Section>
      <Section id="faq" title="Frequently Asked Questions">
        <FAQAccordion />
      </Section>
      <Section id="team" title="Meet the Team">
        <Team />
      </Section>
      <Contact />
      <Particles />
    </Layout>
  </>
)

export default IndexPage
