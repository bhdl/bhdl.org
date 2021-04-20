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
} from "@chakra-ui/react"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <Heading mb={10}>{siteConfig.title}</Heading>
        <Text>{siteConfig.tagline}</Text>
        <Center>
          <Flex mt={10}>
            <Box mr={10}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </Box>
            <Box>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Read the Docs
              </Link>
            </Box>
          </Flex>
        </Center>

        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Read the Docs
          </Link>
        </div> */}
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <ChakraProvider>
      <Layout
        title={`HOME - ${siteConfig.title}`}
        description="A Programming Language and System for making PCBs"
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </ChakraProvider>
  )
}
