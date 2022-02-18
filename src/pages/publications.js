import React from "react"
import Layout from "@theme/Layout"
import { Link } from "@chakra-ui/react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import {
  ChakraProvider,
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react"

export default function Publications() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <ChakraProvider>
      <Box
        bgColor="var(--ifm-hero-background-color)"
        color="var(--ifm-hero-text-color)"
        //   height="400px"
      >
        <Layout
          title={`Publications - ${siteConfig.title}`}
          description={`${siteConfig.tagline}`}
        >
          <Box minH="450px">
            <Center mb={10} pt={10}>
              <Heading>Publications</Heading>
            </Center>
            <Center mb={10}>
              <Flex
                justify="center"
                direction="column"
                maxW={["sm", "lg", "2xl"]}
              >
                <Text my={3}>
                  Hebi Li, Youbiao He, Qi Xiao, Jin Tian and Forrest Sheng Bao.
                  "BHDL: A Lucid, Expressive, and Embedded Programming Language
                  and System for PCB Designs" 2021 58th ACM/IEEE Design
                  Automation Conference (DAC). IEEE, 2021.
                </Text>
                <Text>
                  Youbiao He, Hebi Li, Forrest Bao and Jin Tian, "Circuit
                  Routing Using Monte Carlo Tree Search and Deep Reinforcement
                  Learning", published as a conference paper at VLSI-DAT 2022
                </Text>
              </Flex>
            </Center>
          </Box>
        </Layout>
      </Box>
    </ChakraProvider>
  )
}
