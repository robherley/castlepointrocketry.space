import React from 'react'
import FAQAccordion from '../components/FAQAccordion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Section from '../components/Section'
import ServiceFlow from '../components/ServiceFlow'
import Video from '../components/Video'
import Team from '../components/Team'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout seo={{ title: 'Overview' }}>
    <Hero />
    <Section
      id="video"
      title="Next Generation of Reusable Space Launch Vehicles"
      subtitle="Gravity is omnipresent in our science. The next step to better learning is removing it from the equation. To do so, we have developed a new vehicle launch platform that will make microgravity research easy, affordable, and repeatable."
    >
      <Video />
    </Section>
    <Section
      id="microgravity"
      title="Our Microgravity as a Service"
      subtitle="We want to make researching in microgravity as easy as ordering a lab test here on Earth. With our suborbital flights, researchers will have a dependable schedule of launches to book a spot on, and full integration services to help them carry out their experiments."
    >
      <ServiceFlow />
    </Section>
    <Section id="faq" title="Frequently Asked Questions">
      <FAQAccordion />
    </Section>
    <Section id="team" title="Meet the Team">
      <Team />
    </Section>
    <Contact />
  </Layout>
)

export default IndexPage
