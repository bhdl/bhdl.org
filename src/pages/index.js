import * as React from "react"
import { Link, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ButtonLink from "../components/buttonlink"
import Container from "../components/container"

function SectionA() {
  return (
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
              <h1
                style={{
                  textAlign: "center",
                  margin: 0,
                  fontSize: 45,
                  letterSpacing: "0.01em",
                }}
                className="text-green-500"
              >
                BHDL
              </h1>
              <p
                style={{
                  paddingTop: 15,
                  textAlign: "center",
                  fontSize: 24,
                  letterSpacing: "0.01em",
                  fontWeight: 200,
                }}
              >
                A Programming Language and System for making PCBs
              </p>
              <div className="flex justify-center items-center pt-16">
                <div className="pl-6">
                  <ButtonLink to="/docs/getting-started" type="primary">
                    Get Started
                  </ButtonLink>
                </div>
                <div className="pl-6">
                  <ButtonLink to="https://cloud.bhdl.org" type="secondary">
                    Try it online!
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </div>
  )
}

function SectionB() {
  return (
    <Container>
      <div className="flex pt-16 pb-16">
        <div className="flex flex-1 flex-col">
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            PCB as a Program
          </h3>
          <div>
            <p>
              Ex cillum proident minim quis consequat et irure exercitation anim
              sunt amet voluptate ut est. Reprehenderit reprehenderit esse duis
              nisi est commodo ipsum veniam ex aute. Commodo amet consequat
              officia qui cillum enim fugiat eu non.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col ml-16">
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            Lucid, Expressive, Embedded
          </h3>
          <p>
            Officia labore culpa excepteur culpa laboris deserunt. Minim cillum
            do laborum est nisi laborum. Magna irure irure proident dolor
            proident fugiat elit ad incididunt amet. Commodo quis tempor laborum
            aliqua cillum magna dolore aliquip culpa duis eiusmod enim duis in.
          </p>
        </div>
        <div className="flex flex-1 flex-col ml-16">
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            Auto-Placement &amp; Routing
          </h3>
          <p>
            In ut tempor consequat duis magna laboris eu nulla exercitation
            eiusmod ullamco. Irure nostrud et culpa amet occaecat. Reprehenderit
            adipisicing minim aliquip commodo dolore laboris occaecat magna
            excepteur. Amet ipsum anim deserunt dolore sit officia do do non
            adipisicing esse consectetur.
          </p>
        </div>
      </div>
    </Container>
  )
}

const IndexPage = props => (
  <Layout location={props.location}>
    {/* <SEO title="Home" /> */}
    <SectionA />
    <SectionB />
  </Layout>
)

export default IndexPage
