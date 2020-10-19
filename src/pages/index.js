import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import About from "../components/About"
import ServicesSummary from "../components/ServicesSummary"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Invest from "../components/Invest"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Invest />
    <About />
    <ServicesSummary />
    <Team />
    <Contact />
  </Layout>
)

export default IndexPage
