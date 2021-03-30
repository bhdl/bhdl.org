import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import Container from "../components/container"

const linkPrimary =
  "bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 transition duration-200"
const linkSecondary =
  "text-yellow-500 hover:text-yellow-300 transition duration-200"
const linkExample = linkSecondary + " mx-6"

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
                BHDL Example Notebooks
              </h1>
              <ul className="flex flex-wrap justify-center">
                <li className={linkExample}>
                  <a
                    target="_blank"
                    href="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/BHDL-Key.ipynb"
                  >
                    BHDL-Key
                  </a>
                </li>
                <li className={linkExample}>
                  <a
                    target="_blank"
                    href="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/onebutton.ipynb"
                  >
                    onebutton
                  </a>
                </li>
                <li className={linkExample}>
                  <a
                    target="_blank"
                    href="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/spreadboard.ipynb"
                  >
                    spreadboard
                  </a>
                </li>
                <li className={linkExample}>
                  <a
                    target="_blank"
                    href="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/demo-board.ipynb"
                  >
                    demo-board
                  </a>
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
