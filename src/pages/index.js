import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
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
    <Services />
    <Team />
    <Contact />
  </Layout>
)

export default IndexPage
