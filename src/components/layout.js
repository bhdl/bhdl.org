/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Container from "../components/container"

function Nav() {
  return (
    <nav className="flex flex-auto border-l pl-3 border-gray-700 no-scrollbar overflow-x-auto h-full items-center">
      <Link to="/docs" className="flex px-3 hover:bg-gray-900 py-1 transition">
        Docs
      </Link>
      <Link to="/blog" className="flex px-3 hover:bg-gray-900 py-1 transition">
        Blog
      </Link>
      <Link
        to="/example"
        className="flex px-3 hover:bg-gray-900 py-1 transition"
      >
        Examples
      </Link>

      <Link
        to="/publication"
        className="flex px-3 hover:bg-gray-900 py-1 transition"
      >
        Publications
      </Link>
    </nav>
  )
}

const Header = () => (
  <header className="bg-gray-800 text-white fixed w-full z-10">
    <Container>
      <div className="flex items-center h-12">
        <Link
          to="/"
          className="text-yellow-500 hover:text-yellow-400 mr-8 lg:mr-16 items-center"
        >
          <span>BHDL</span>
        </Link>

        <Nav />
        <div className="ml-2 px-3 border-l border-gray-600 flex flex flex-row-reverse items-center no-scrollbar overflow-x-auto h-full">
          <a
            href="https://cloud.bhdl.org"
            target="_blank"
            className="flex px-3 hover:bg-gray-900 py-1 transition"
          >
            Cloud
          </a>
          <a
            href="https://github.com/lihebi/bhdl"
            target="_blank"
            className="flex px-3 hover:bg-gray-900 py-1 transition "
          >
            GitHub
          </a>
        </div>
      </div>
    </Container>
  </header>
)

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10">
      <Container>
        <div className="ml-6 mb-6">Copyright © 2021 BHDL Team.</div>
        <div className="w-full flex flex-wrap justify-center">
          <div className="flex flex-1 flex-col ml-6">
            <h3 className="text-white font-bold mb-2 text-lg">Docs</h3>
            <p>Getting Started</p>
            <p>Installation</p>
            <p>Tutorial</p>
          </div>
          <div className="flex flex-1 flex-col ml-6">
            <h3 className="text-white font-bold mb-2 text-lg">Community</h3>
            <p>GitHub</p>
            <p>Twitter</p>
            <p>Blog</p>
            <p>Discord</p>
            <p>Stack Overflow</p>
          </div>
          <div className="flex flex-1 flex-col ml-6">
            <h3 className="text-white font-bold mb-2 text-lg">About</h3>
            <p>About Us</p>
            <p>Team</p>
            <p>Contact</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col">
      <Header location={location} />
      <div className="flex flex-col">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
