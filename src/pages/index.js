import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Rocket from "../components/Rocket"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Invest from "../components/Invest"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Invest />
    <Services />
    <Rocket />
    <Team />
    <Contact />
  </Layout>
)

export default IndexPage
