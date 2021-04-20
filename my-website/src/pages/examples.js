import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "../components/HomepageFeatures"

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
        <Heading size="md" color="blue" mt={5} mb={2}>
          <a href={url} target="_blank">
            {title}
          </a>
        </Heading>
        <Text>
          Fusce porttitor nulla pellentesque odio placerat semper. Suspendisse
          dictum sem non dictum porttitor. Nulla id arcu iaculis, posuere erat
          ut, mollis elit. Vivamus quis diam efficitur tellus dictum
          sollicitudin vel eu metus.
        </Text>
      </Box>
    </Flex>
  )
}

export default function Examples() {
  return (
    <ChakraProvider>
      <Layout
      //   title={`HOME - ${siteConfig.title}`}
      //   description="A Programming Language and System for making PCBs"
      >
        <Box>
          <Center my={10}>
            <Heading>Examples</Heading>
          </Center>
          <Flex wrap="wrap" justify="center">
            <ExampleBlock
              image="../../static/img/images/assets/BHDL-Key-pcbnew.png"
              title="BHDL-Key"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/BHDL-Key.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="../../static/img/images/assets/threebutton.png"
              title="Three Buttons"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/onebutton.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="../../static/img/images/assets/spreadboard-pcbnew.png"
              title="Arduino SpreadBoard"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/spreadboard.ipynb"
            ></ExampleBlock>
            <ExampleBlock
              image="../../static/img/images/assets/demo-board-pcbnew.png"
              title="Key Matrix"
              url="https://nbviewer.jupyter.org/github/lihebi/bhdl.org/blob/master/notebooks/demo-board.ipynb"
            ></ExampleBlock>
          </Flex>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}
