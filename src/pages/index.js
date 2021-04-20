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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Box
      // className={clsx("hero hero--primary", styles.heroBanner)}
      className={styles.heroBanner}
      bgGradient="linear(to-l, #74ebd5 0%, #ACB6E5 50%)"
    >
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <Heading as="h1" mb={10} size="4xl">
          {/* {siteConfig.title} */}
          Board HDL
        </Heading>
        <Text fontSize="xl">{siteConfig.tagline}</Text>

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
                to="/examples"
              >
                Browse Examples
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
    </Box>
  )
}

function Features() {
  return (
    <Box>
      <Flex mb={10} mt={10}>
        <Flex bgColor="gray.100" p={5} boxShadow="xl" direction="column" mx={5}>
          <Heading size="md" mb={2} fontWeight="lighter">
            PCB as a Program
          </Heading>
          <Text>
            Ex cillum proident minim quis consequat et irure exercitation anim
            sunt amet voluptate ut est. Reprehenderit reprehenderit esse duis
            nisi est commodo ipsum veniam ex aute. Commodo amet consequat
            officia qui cillum enim fugiat eu non.
          </Text>
        </Flex>
        <Flex bgColor="gray.100" p={5} boxShadow="xl" direction="column">
          <Heading size="md" mb={2} fontWeight="lighter">
            Lucid, Expressive, Embedded
          </Heading>
          <Text>
            Officia labore culpa excepteur culpa laboris deserunt. Minim cillum
            do laborum est nisi laborum. Magna irure irure proident dolor
            proident fugiat elit ad incididunt amet. Commodo quis tempor laborum
            aliqua cillum duis eiusmod enim duis in.
          </Text>
        </Flex>
        <Flex bgColor="gray.100" p={5} boxShadow="xl" direction="column" mx={5}>
          <Heading size="md" mb={2} fontWeight="lighter">
            Auto-Placement &amp; Routing
          </Heading>
          <Text>
            In ut tempor consequat duis magna laboris eu nulla exercitation
            eiusmod ullamco. Irure nostrud et culpa amet occaecat. Reprehenderit
            adipisicing minim aliquip commodo dolore laboris occaecat magna
            excepteur. Amet ipsum sit do do non adipisicing esse
          </Text>
        </Flex>
      </Flex>
    </Box>
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
        <Box bgColor="var(--ifm-hero-background-color)">
          <HomepageHeader />
          <Center my={5}>
            <Alert maxW="xl" status="warning">
              <AlertIcon />
              This site is under construction, please check back later (soon!)
            </Alert>
          </Center>

          <main>
            <Box>
              <Center>
                <Image src="/img/workflow.png" alt="alt" w="lg" />
              </Center>
            </Box>
            <Features></Features>
            <Box>
              <Center>
                <Image src="/img/jupyter.png" alt="jupyter" w={0.9} mb={10} />
              </Center>
            </Box>
            {/* <HomepageFeatures /> */}
          </main>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}
