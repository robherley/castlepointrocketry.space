import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import About from "../components/About"
import ServicesSummary from "../components/ServicesSummary"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Invest from "../components/Invest"
import { Global, css } from '@emotion/core'

const IndexPage = () => (
  <Layout>
    <Global styles={css`
      // header shouldn't
      main {
        //position: absolute;
        top: 0;
      }
    `}/>
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
