import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import News from "../components/News"

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <News />
  </Layout>
)

export default NewsPage
