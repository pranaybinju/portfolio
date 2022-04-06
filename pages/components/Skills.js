import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Image, Text, chakra, keyframes } from "@chakra-ui/react";
import {
  motion,
  useTransform,
  useViewportScroll,
  isValidMotionProp,
} from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});
const animationKeyframes = keyframes`
0% { transform: translateY(0px); }
50% { transform: translateY(-5px); }
100% { transform:translateY(0px); }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const Skills = () => {
  const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  return (
    <>
      <Text fontWeight={"bold"} mx="3rem" fontSize={"3rem"}>
        <span
          style={{
            backgroundColor: "#f3ec78",
            backgroundImage:
              "linear-gradient( 45deg, #CA4246 30%, #E16541 60%, #F18F43 100% )",
            backgroundSize: "100%",
            "-webkit-background-clip": "text",
            "-moz-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "-moz-text-fill-color": "transparent",
          }}
        >
          Skills
        </span>
      </Text>

      <Flex>
        <Box bg="#fafafa" width={"100%"} mb="1rem" h="25rem">
          <Box px="5rem" position="relative" height={"100%"} width="100%">
            {[
              {
                id: 1,
                x: "15%",
                y: "10%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
              },
              {
                id: 2,
                x: "25%",
                y: "35%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
              },
              {
                id: 3,
                x: "40%",
                y: "22%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                id: 4,
                x: "65%",
                y: "10%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                id: 5,
                x: "45%",
                y: "60%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                id: 6,
                x: "65%",
                y: "50%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                id: 7,
                x: "55%",
                y: "45%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
              },
              {
                id: 8,
                x: "20%",
                y: "65%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
              },
              {
                id: 9,
                x: "30%",
                y: "10%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
              },
              {
                id: 10,
                x: "35%",
                y: "45%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                id: 11,
                x: "50%",
                y: "22%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
                id: 12,
                x: "75%",
                y: "25%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
              },
              {
                id: 13,
                x: "75%",
                y: "60%",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
              },
            ].map((datum, index) => (
              <Box
                as={motion.div}
                backgroundColor="white"
                borderRadius="40px"
                height="80px"
                width="80px"
                position="absolute"
                left={datum.x}
                top={datum.y}
                animation={animation}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                // animate={{ y: -5 }}
                // transition={{
                //   repeat: Infinity,
                //   delay: 1,
                //   repeatType: "reverse",
                //   from: 0,
                //   duration: 2,
                //   ease: "backOut",
                // }}
                boxShadow={"md"}
              >
                <Image width={10} height={10} src={datum.src} />
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Skills;
