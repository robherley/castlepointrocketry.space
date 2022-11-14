import React from 'react'
import Callout from '../components/Callout'
import Contact from '../components/Contact'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Particles from '../components/Particles'
import Section from '../components/Section'
import Team from '../components/Team'

const IndexPage = () => (
  <>
    <Layout seo={{ title: 'Overview' }}>
      <Hero />
      {/* used for the scroll to learn more btn */}
      <div id="content" />
      <Callout
        href="https://calendly.com/hudsonspace-nathan/website-inquiry"
        message="Chat with us about your space needs!"
        buttonText="Get in touch with Hudson Space"
      />
      <Section id="team" title="Meet the Team">
        <Team />
        <Carousel />
      </Section>
      <Contact />
      <Particles />
    </Layout>
  </>
)

export default IndexPage
