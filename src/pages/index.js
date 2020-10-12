import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    {/*<Rocket />
    <Team />
    <Contact />*/}
  </Layout>
)

export default IndexPage
