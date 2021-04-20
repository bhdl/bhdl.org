import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
// import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "../components/HomepageFeatures"
import { Link } from "@chakra-ui/react"

import {
  ChakraProvider,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Image,
} from "@chakra-ui/react"

function ExampleBlock({ image, title, url, text }) {
  return (
    <Flex
      direction="column"
      mx={5}
      mb={5}
      rounded="md"
      border="1px solid"
      borderColor="gray.200"
      p={3}
      boxShadow="2xl"
      maxW="md"
    >
      {/* {children} */}
      <Image src={image} alt="alt" />
      <Box mx={5}>
        <Box mt={5} mb={2}>
          <Link
            href={url}
            fontSize="lg"
            isExternal
            // HACK using the text link style with dark mode support
            style={{
              color: "var(--ifm-link-color)",
              textDecoration: "var(--ifm-link-decoration)",
            }}
          >
            {title}
          </Link>
        </Box>

        <Text>
          Fusce porttitor nulla pellentesque <Link to="#">hello</Link> odio
          placerat semper. Suspendisse dictum sem non dictum porttitor. Nulla id
          arcu iaculis, posuere erat ut, mollis elit. Vivamus quis diam
          efficitur tellus dictum sollicitudin vel eu metus.
        </Text>
      </Box>
    </Flex>
  )
}

export default function Examples() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <ChakraProvider>
      <Box
        bgColor="var(--ifm-hero-background-color)"
        color="var(--ifm-hero-text-color)"
      >
        <Layout
          title={`Examples - ${siteConfig.title}`}
          description={`${siteConfig.tagline}`}
        >
          <Center mb={10} pt={10}>
            <Heading>Examples</Heading>
          </Center>
          <Flex wrap="wrap" justify="center">
            <ExampleBlock
              image="/img/BHDL-Key-pcbnew.png"
              title="BHDL-Key"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/BHDL-Key.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="/img/threebutton.png"
              title="Three Buttons"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/onebutton.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="/img/spreadboard-pcbnew.png"
              title="Arduino SpreadBoard"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/spreadboard.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="/img/demo-board-pcbnew.png"
              title="Key Matrix"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/demo-board.ipynb"
            ></ExampleBlock>
          </Flex>
        </Layout>
      </Box>
    </ChakraProvider>
  )
}
