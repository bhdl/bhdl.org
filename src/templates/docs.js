import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
export default function DocPage({ data }) {
  const doc = data.markdownRemark

  return (
    <Layout>
      <Container>
        <article className="prose prose-green mt-16 pt-16">
          <h1 className="font-bold">{doc.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: doc.tableOfContents }} />
          <div dangerouslySetInnerHTML={{ __html: doc.html }} />
        </article>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`
