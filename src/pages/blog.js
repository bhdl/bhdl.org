import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Container from "../components/container"

// const linkPrimary =
//   "bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 transition duration-200"
const linkSecondary =
  "text-yellow-500 hover:text-yellow-300 transition duration-200"
// const linkExample = linkSecondary + " mx-6"
const linkStyle =
  "block mt-1 text-lg leading-tight font-medium text-black hover:underline"

function PubBlock({ bib }) {
  return <pre>{bib}</pre>
}

export default function BlogPage({ data }) {
  return (
    <Layout>
      <div className="w-full">
        <header className="text-white bg-gray-700">
          <div className="pt-16 pb-16">
            <div
              style={{
                // Content should be above absolutely-positioned hero image
                position: "relative",
              }}
            >
              <Container>
                <h1 className="text-yellow-500 text-5xl pt-16 pb-16 text-center">
                  Blog Posts
                </h1>

                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                    <Link to={node.fields.slug}>
                      <h3
                        className="text-lg font-bold"
                        // style={css`
                        //   margin-bottom: ${rhythm(1 / 4)};
                        // `}
                      >
                        {node.frontmatter.title}{" "}
                        <span className="text-blue-900">
                          {/* — {node.frontmatter.date} */}
                        </span>
                      </h3>
                      <p>{node.excerpt}</p>
                    </Link>
                  </div>
                ))}
              </Container>
            </div>
          </div>
        </header>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { glob: "/blogs/*" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
