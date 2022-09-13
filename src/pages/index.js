import React from 'react'
import Callout from '../components/Callout'
import Contact from '../components/Contact'
import Carousel from '../components/Carousel'
import FAQAccordion from '../components/FAQAccordion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Particles from '../components/Particles'
import Section from '../components/Section'
import Service from '../components/Service'
import Team from '../components/Team'

const IndexPage = () => (
  <>
    <Layout seo={{ title: 'Overview' }}>
      <Hero />
      {/* used for the scroll to learn more btn */}
      <div id="content" />
      <Section
        id="microgravity"
        title="Microgravity as a Service™"
        subtitle="We want to make manufacturing and research in microgravity as easy as ordering a lab test here on Earth. With our end-to-end service, customers will have a dependable schedule of launches to book a spot on and full integration services to help them carry out their processes."
      >
        <Service />
        <Callout
          href="https://calendly.com/hudsonspace-nathan/website-inquiry"
          message="Chat with us about launching your research!"
          buttonText="Get in touch with Hudson Space"
        />
      </Section>
      <Section id="faq" title="Frequently Asked Questions">
        <FAQAccordion />
      </Section>
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
