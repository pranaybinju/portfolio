import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="white">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@163;300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Content />
      <footer className={styles.footer}>
        <Flex justifyContent={"center"} alignItems="center">
          <Text fontSize="0.8rem">
            crafted with&nbsp; ❤️ &nbsp; by Pranay Binju
          </Text>
        </Flex>
      </footer>
    </Box>
  );
}
