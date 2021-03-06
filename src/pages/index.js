import * as React from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Gallery />
  </Layout>
)

export default IndexPage
