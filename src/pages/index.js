import React from 'react'
import Layout from '../sections/Layout'
import SEO from '../sections/SEO'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Team from '../sections/Team'
import Contact from '../sections/Contact'
import Invest from '../sections/Invest'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Invest />
    <About />
    <Services />
    <Team />
    <Contact />
  </Layout>
)

export default IndexPage
