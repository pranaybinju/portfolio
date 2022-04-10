import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Namaste from "./Namaste";
import WavingHand from "./WavingHand";

const Intro = () => {
  const { scrollY } = useViewportScroll();

  const scale = useTransform(scrollY, [0, 850], [2, 1]);
  const y = useTransform(scrollY, [0, 850], ["40vh", "0vh"]);
  const x = useTransform(scrollY, [0, 850], ["-25vw", "0vw"]);
  const marginTop = useTransform(scrollY, [0, 850], ["-220px", "0px"]);
  const headingFont = useTransform(scrollY, [0, 850], ["3.2rem", "3rem"]);

  const x1 = useTransform(scrollY, [0, 850], ["-60%", "0vw"]);

  return (
    <Box width={"100vw"} mb="1rem" height="300vh">
      <Box height="100vh" display="flex" position="sticky" top="0px">
        <motion.div
          style={{
            height: "100%",
            width: "50vw",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            x: x1,
          }}
        >
          <Text
            textAlign="center"
            mb="0.8rem"
            fontWeight={"bold"}
            fontSize={"3rem"}
          >
            I'm{" "}
            <span
              style={{
                backgroundColor: "#f3ec78",
                backgroundImage:
                  "linear-gradient( 45deg, #CA4246 30%, #E16541 60%, #F18F43 100% )",
                backgroundSize: "100%",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                MozTextFillColor: "transparent",
              }}
            >
              Pranay Binju
            </span>
          </Text>
          <Text
            textAlign="center"
            fontWeight={500}
            mb="0.8rem"
            fontSize={"1.8rem"}
          >
            Senior Front-End Engineer at Kiprosh
          </Text>
          <Text fontSize={"1.1rem"} color="gray" textAlign="center" w={"auto"}>
            {`Computer Science ❤️ , Unpresuming Engineer 👨‍💻 , Chess enthusiast ♘ , Curious about Cosmos 🌌 , 
          Football fan ⚽️ , History and World Affairs afficionado 🌏 , a Student for Life 🤓 `}
          </Text>
        </motion.div>
        <motion.div
          style={{
            height: "100%",
            width: "50vw",

            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            scale,
            y,
            x,
          }}
        >
          <motion.div
            style={{
              marginTop,
            }}
          >
            <Image
              borderRadius={"50%"}
              src="https://bit.ly/dan-abramov"
              width="180"
              height="180"
            />
          </motion.div>

          <motion.div
            style={{
              fontSize: headingFont,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Hello <WavingHand /> ! Namaste <Namaste /> !!
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Intro;
