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

export default function PublicationPage(props) {
  return (
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
                  Publications
                </h1>
                <ul className="flex flex-col justify-center">
                  <li className="flex m-3">
                    <pre>
                      {`
@inproceedings{li2021bhdl,
    title={BHDL: A Lucid, Expressive, and Embedded Programming Language and System for PCB Designs},
    author={Hebi Li, Youbiao He, Qi Xiao, Jin Tian and Forrest Sheng Bao},
    booktitle={2021 58th ACM/IEEE Design Automation Conference (DAC)},
    pages={999},
    year={2021},
    organization={IEEE}
}
                  `}
                    </pre>
                  </li>
                  <li className="flex m-3">
                    <pre>
                      {`
@article{he2020circuit,
    title={Circuit routing using monte carlo tree search and deep neural networks},
    author={He, Youbiao and Bao, Forrest Sheng},
    journal={arXiv preprint arXiv:2006.13607},
    year={2020}
}`}
                    </pre>
                  </li>
                </ul>
              </Container>
            </div>
          </div>
        </header>
      </div>
    </Layout>
  )
}
