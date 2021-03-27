import * as React from "react"
import { Link } from "gatsby"
import Container from "./container"

function Nav() {
  return (
    <nav className="flex flex-1 h-full items-center">
      <Link to="/docs" className="flex px-3 hover:bg-gray-900 py-1 transition">
        Docs
      </Link>
      <Link to="/blog" className="flex px-3 hover:bg-gray-900 py-1 transition">
        Blog
      </Link>
    </nav>
  )
}

const Header = () => (
  <header className="bg-gray-800 text-white fixed w-full z-10">
    <Container>
      <div className="flex items-center h-16">
        <Link
          to="/"
          className="text-green-500 hover:text-green-400 mr-16 items-center"
        >
          <span>BHDL</span>
        </Link>

        <Nav />
      </div>
    </Container>
  </header>
)

export default Header
