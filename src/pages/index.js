import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/container"

const linkPrimary =
  "bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 transition duration-200"
const linkSecondary =
  "text-yellow-500 hover:text-yellow-300 transition duration-200"

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
              <h1 className="text-yellow-500 text-5xl pt-16 text-center">
                Board HDL
              </h1>
              <p className="text-center text-2xl pt-8">
                A Programming Language and System for making PCBs
              </p>
              <div className="flex flex-wrap justify-center items-center pt-16">
                <div className="pl-6 pt-3">
                  <Link to="/docs/getting-started" className={linkPrimary}>
                    Get Started
                  </Link>
                </div>
                <div className="pl-6 pt-3">
                  <a
                    href="https://cloud.bhdl.org"
                    target="_blank"
                    className={linkSecondary}
                  >
                    Try it online!
                  </a>
                </div>
                <div className="pl-6 pt-3">
                  <Link to="/docs" className={linkSecondary}>
                    Read Docs
                  </Link>
                </div>
                <div className="pl-6 pt-3">
                  <Link to="/example" className={linkSecondary}>
                    Browse Examples
                  </Link>
                </div>
                <div className="pl-6 pt-3">
                  <Link to="/docs/questionare" className={linkSecondary}>
                    Questionare
                  </Link>
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
  const boxStyle = "flex flex-1 flex-col mt-6 bg-gray-100 shadow-lg p-5"
  return (
    <Container>
      <div className="flex w-full justify-center pt-6">
        <StaticImage
          className="max-w-lg	 h-full object-cover"
          src="../images/workflow.png"
          alt="A dinosaur"
        />
      </div>

      <div className="flex pt-16 pb-16 flex-col md:flex-row">
        <div className={boxStyle}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">PCB as a Program</Link>
          </h3>
          <div>
            <p>
              Ex cillum proident minim quis consequat et irure exercitation anim
              sunt amet voluptate ut est. Reprehenderit reprehenderit esse duis
              nisi est commodo ipsum veniam ex aute. Commodo amet consequat
              officia qui cillum enim fugiat eu non.{" "}
              <Link to="/todo" className="text-blue-500">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <div className={boxStyle + " md:ml-10"}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">Lucid, Expressive, Embedded</Link>
          </h3>
          <p>
            Officia labore culpa excepteur culpa laboris deserunt. Minim cillum
            do laborum est nisi laborum. Magna irure irure proident dolor
            proident fugiat elit ad incididunt amet. Commodo quis tempor laborum
            aliqua cillum duis eiusmod enim duis in.{" "}
            <Link to="/todo" className="text-blue-500">
              Learn more
            </Link>
          </p>
        </div>
        <div className={boxStyle + " md:ml-10"}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">Auto-Placement &amp; Routing</Link>
          </h3>
          <p>
            In ut tempor consequat duis magna laboris eu nulla exercitation
            eiusmod ullamco. Irure nostrud et culpa amet occaecat. Reprehenderit
            adipisicing minim aliquip commodo dolore laboris occaecat magna
            excepteur. Amet ipsum sit do do non adipisicing esse .{" "}
            <Link to="/todo" className="text-blue-500">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      {/* <div className="flex w-full justify-center pt-6 pb-6">
        <StaticImage
          className="w-full h-full object-cover"
          src="../images/taste.png"
          alt="A dinosaur"
        />
      </div> */}

      <div className="flex w-full justify-center pt-6 pb-10">
        <StaticImage
          className="w-full h-full object-cover"
          src="../images/jupyter.png"
          alt="A dinosaur"
        />
      </div>
    </Container>
  )
}

function SectionC() {
  const boxStyle = "flex flex-1 flex-col mt-6 bg-gray-100 shadow-lg p-5"
  return (
    <Container>
      <div className="flex flex-col md:flex-row pt-16 pb-16">
        <div className={boxStyle}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">Lucid, Expressive, Embedded</Link>
          </h3>
          <div>
            <StaticImage
              className="w-full h-full object-cover"
              src="../images/syntax.png"
              alt="A dinosaur"
            />
          </div>
        </div>
        <div className={boxStyle + " md:ml-10"}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">Jupyter Development Environment</Link>
          </h3>
          <StaticImage
            className="w-full h-full object-cover"
            src="../images/jupyter.png"
            alt="A dinosaur"
          />
        </div>
        <div className={boxStyle + " md:ml-10"}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">Wire Syntax</Link>
          </h3>
          <StaticImage
            className="w-full h-full object-cover"
            src="../images/wire.png"
            alt="A dinosaur"
          />
        </div>
        <div className={boxStyle + " md:ml-10"}>
          <h3 className="text-gray-800 font-light mb-2 text-lg">
            <Link to="/todo">workflow</Link>
          </h3>
          <StaticImage
            className="w-full h-full object-cover"
            src="../images/workflow.png"
            alt="A dinosaur"
          />
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
    {/* <SectionC /> */}
  </Layout>
)

export default IndexPage
