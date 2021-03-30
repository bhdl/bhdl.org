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

function ExampleBlock({ name, img, link, children }) {
  console.log(img)
  return (
    <div className="max-w-sm mx-auto bg-white p-3 rounded-xl shadow-md overflow-hidden">
      <div className="">
        <div className="">{img}</div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {/* Case study */}
            {name}
          </div>
          {/* <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}
          </a> */}
          <p className="mt-2 text-gray-500">
            {children}{" "}
            <a target="_blank" href={link} className={linkSecondary}>
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

const ExamplePage = props => (
  <Layout location={props.location}>
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
                BHDL Examples
              </h1>
              <ul className="flex flex-wrap justify-center">
                <li className="flex m-3">
                  <ExampleBlock
                    name="BHDL-Key"
                    // img="../images/assets/BHDL-Key-pcbnew.png"
                    img={
                      <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/assets/BHDL-Key-pcbnew.png"
                        // width={200}
                        // height={200}
                        alt="A dinosaur"
                      />
                    }
                    link="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/BHDL-Key.ipynb"
                  >
                    Fusce porttitor nulla pellentesque odio placerat semper.
                    Suspendisse dictum sem non dictum porttitor. Nulla id arcu
                    iaculis, posuere erat ut, mollis elit. Vivamus quis diam
                    efficitur tellus dictum sollicitudin vel eu metus.
                  </ExampleBlock>
                </li>
                <li className="flex m-3">
                  <ExampleBlock
                    name="threebutton"
                    img={
                      <StaticImage
                        // className="w-full h-full object-cover md:w-48"
                        className="w-full h-full object-cover"
                        src="../images/assets/threebutton.png"
                        alt="A dinosaur"
                      />
                    }
                    link="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/onebutton.ipynb"
                  >
                    Donec tincidunt, nulla a lacinia volutpat, libero mi
                    tincidunt felis, eget suscipit ante justo ut felis. Donec
                    ipsum nibh, dapibus sit amet viverra vehicula, lacinia vel
                    massa. Aliquam ipsum velit, faucibus a urna at, laoreet
                    scelerisque enim. Integer ex arcu, accumsan id elit in,
                    tempus lobortis mauris.
                  </ExampleBlock>
                </li>
                <li className="flex m-3">
                  <ExampleBlock
                    name="spreadboard"
                    img={
                      <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/assets/spreadboard-pcbnew.png"
                        alt="A dinosaur"
                      />
                    }
                    link="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/spreadboard.ipynb"
                  >
                    Nullam semper ipsum turpis, quis fringilla ex efficitur id.
                    Duis at ante porta, suscipit urna non, pharetra felis. Etiam
                    non consequat ante, eget scelerisque diam. In hac habitasse
                    platea dictumst. Morbi venenatis dignissim ipsum sit amet
                    gravida.
                  </ExampleBlock>
                </li>
                <li className="flex m-3">
                  <ExampleBlock
                    name="key-matrix"
                    img={
                      <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/assets/demo-board-pcbnew.png"
                        alt="A dinosaur"
                      />
                    }
                    link="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/demo-board.ipynb"
                  >
                    Curabitur non nisi sed erat accumsan commodo. Nullam
                    volutpat enim lacus, non vitae. Quisque a posuere nunc, eget
                    laoreet metus.
                  </ExampleBlock>
                </li>
              </ul>

              <div className="flex justify-center items-center pt-16"></div>
            </Container>
          </div>
        </div>
      </header>
    </div>
  </Layout>
)

export default ExamplePage
