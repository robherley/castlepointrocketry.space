import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Video from '../components/Video'

const IndexPage = () => (
  <Layout seo={{ title: 'Overview' }}>
    <Hero />
    <Section
      title="Next Generation of Reusable Space Launch Vehicles"
      subtitle="Gravity is omnipresent in our science. The next step to better learning is removing it from the equation. To do so, we have developed a new vehicle launch platform that will make microgravity research easy, affordable, and repeatable."
    >
      <Video />
    </Section>
    <Section
      id="microgravity"
      title="Our Microgravity as a Service"
      subtitle="We want to make researching in microgravity as easy as ordering a lab test here on Earth. With our suborbital flights, researchers will have a dependable schedule of launches to book a spot on, and full integration services to help them carry out their experiments."
    ></Section>
    <Section
      title="Why Hudson Space?"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac quam id tortor aliquet scelerisque lacinia eu elit. Quisque eget ornare libero. Maecenas odio mauris, ultrices sed mi sed, ornare consequat metus."
    ></Section>
    <Section id="faq" title="Frequently Asked Questions"></Section>
    <Section id="team" title="Meet the Team"></Section>
  </Layout>
)

export default IndexPage
