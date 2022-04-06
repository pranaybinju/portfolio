import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import { Box } from "@chakra-ui/react";

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
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </Box>
  );
}
