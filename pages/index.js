import Head from "next/head";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="white">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio" />
        <meta
          property="og:image"
          content={"https://pranay-binju.vercel.app/portfolio.png"}
          key="ogimage"
        />
        <meta
          property="og:description"
          content={"Check out my work here!"}
          key="ogdescription"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@163;300;500&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LXVZ2X1HBF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LXVZ2X1HBF');
          `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <Content />
      <footer className={styles.footer}>
        <Flex justifyContent={"center"} alignItems="center">
          <Text fontSize="0.9rem">
            crafted with&nbsp;❤️ &nbsp; by Pranay Binju
          </Text>
        </Flex>
      </footer>
    </Box>
  );
}
