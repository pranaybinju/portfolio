import React from "react";
import { Box, Flex, Image, Text, keyframes, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
0% { transform: translateY(0px); }
50% { transform: translateY(-5px); }
100% { transform:translateY(0px); }
`;

const skillData = [
  {
    id: 1,
    name: "MongoDB",
    x: "20%",
    y: "15%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 2,
    name: "Git",
    x: "25%",
    y: "40%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    id: 3,
    name: "CSS3",
    x: "40%",
    y: "22%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  },
  {
    id: 4,
    name: "NextJS",
    x: "65%",
    y: "15%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 5,
    name: "React & React Native",
    x: "45%",
    y: "60%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    x: "65%",
    y: "50%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "TypeScript",
    x: "55%",
    y: "45%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 8,
    name: "NodeJS",
    x: "20%",
    y: "70%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    id: 9,
    name: "D3.js",
    x: "30%",
    y: "10%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-plain.svg",
  },
  {
    id: 10,
    name: "HTML5",
    x: "35%",
    y: "45%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: 11,
    name: "JavaScript",
    x: "50%",
    y: "22%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 12,
    name: "Jest",
    x: "75%",
    y: "25%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    id: 13,
    name: "jQuery",
    x: "75%",
    y: "60%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
  },
  {
    id: 14,
    name: "Redux",
    x: "58%",
    y: "70%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 15,
    name: "GraphQL",
    x: "32%",
    y: "70%",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    id: 15,
    name: "Go",
    x: "15%",
    y: "45%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  },

  {
    id: 16,
    name: "Webpack",
    x: "58%",
    y: "10%",
    type: "secondary",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
  },
];
const Skills = () => {
  return (
    <Box>
      <Text fontWeight={"bold"} mx="3rem" mb="0.5rem" fontSize={"3rem"}>
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
          Skills
        </span>
      </Text>

      <Flex width={"100%"} flex={1}>
        <Box width={"100vmax"} bg="#fafafa" mb="8rem" h="25rem">
          <Box
            px="5rem"
            position="relative"
            height={"100%"}
            width={["100vh", "100vh", "100vh", "100%"]}
          >
            {skillData.map((datum, index) => (
              <Tooltip key={datum.name} label={datum.name}>
                <Box
                  as={motion.div}
                  backgroundColor="white"
                  borderRadius={[
                    datum.type === "secondary" ? "20px" : "25px",
                    datum.type === "secondary" ? "20px" : "25px",
                    datum.type === "secondary" ? "20px" : "25px",
                    datum.type === "secondary" ? "30px" : "40px",
                  ]}
                  height={[
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "60px" : "80px",
                  ]}
                  width={[
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "40px" : "50px",
                    datum.type === "secondary" ? "60px" : "80px",
                  ]}
                  position="absolute"
                  left={datum.x}
                  top={datum.y}
                  animation={`${animationKeyframes} 5s ease-in-out 0.${
                    index + 1
                  }s infinite`}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                  boxShadow={"md"}
                >
                  <Image
                    width={[6, 6, 6, datum.type === "secondary" ? 8 : 10]}
                    height={[6, 6, 6, datum.type === "secondary" ? 8 : 10]}
                    src={datum.src}
                    alt={datum.name}
                  />
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
