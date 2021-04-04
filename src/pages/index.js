import React from 'react'
import Hero from '../components/Hero'
import Layout, { SEO } from '../components/Layout'
import Section from '../components/Section'

const IndexPage = () => (
  <Layout>
    <SEO title="Overview" />
    <Hero />
    <Section
      title="Space doesn’t have to be expensive."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac quam id tortor aliquet scelerisque lacinia eu elit."
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque et
      laboriosam assumenda possimus fuga unde! Voluptas ex eos iusto ullam quo.
      Hic ducimus id fugit numquam ea? Cumque, reiciendis!
    </Section>
    <Section
      title="Our Microgravity as a Service"
      description="We want to make researching in microgravity as easy as ordering a lab test here on Earth. With our suborbital flights, researchers will have a dependable schedule of launches to book a spot on, and full integration services to help them carry out their experiments."
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque et
      laboriosam assumenda possimus fuga unde! Voluptas ex eos iusto ullam quo.
      Hic ducimus id fugit numquam ea? Cumque, reiciendis!
    </Section>
    <Section
      title="Why Hudson Space?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac quam id tortor aliquet scelerisque lacinia eu elit. Quisque eget ornare libero. Maecenas odio mauris, ultrices sed mi sed, ornare consequat metus."
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque et
      laboriosam assumenda possimus fuga unde! Voluptas ex eos iusto ullam quo.
      Hic ducimus id fugit numquam ea? Cumque, reiciendis!
    </Section>
    <Section title="Frequently Asked Questions">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque et
      laboriosam assumenda possimus fuga unde! Voluptas ex eos iusto ullam quo.
      Hic ducimus id fugit numquam ea? Cumque, reiciendis!
    </Section>
    <Section
      title="Meet the Team"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac quam id tortor aliquet scelerisque lacinia eu elit. Quisque eget ornare libero. "
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque et
      laboriosam assumenda possimus fuga unde! Voluptas ex eos iusto ullam quo.
      Hic ducimus id fugit numquam ea? Cumque, reiciendis!
    </Section>
  </Layout>
)

export default IndexPage
