import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Contributions = () => {
  return (
    <>
      <Text mb="1rem" fontWeight={"bold"} mx="3rem" fontSize={"3rem"}>
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
          Contributions
        </span>
      </Text>
      <Box
        mx="3rem"
        display={"grid"}
        gridTemplateColumns="1fr 1fr 1fr"
        gridGap="2rem"
        mb="5rem"
      >
        <Flex
          borderRadius={"10px"}
          h={"fit-content"}
          boxShadow={"md"}
          direction={"column"}
        >
          <NextLink href="https://blog.kiprosh.com/author/pranay/" passHref>
            <Link target="_blank" _hover={{ textDecoration: "none" }}>
              <Image
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"10px"}
                w="100%"
                mb={"0.8rem"}
                src="./blog.png"
              ></Image>
              <Text fontSize={"1.2rem"} px="0.8rem">
                Tech Blogs:
              </Text>
              <Text fontSize={"1rem"} color="gray" px="0.8rem" pb="0.8rem">
                {
                  "I love to share my learnings in the form of tech blogs. Here are all the tech blogs I've written for my current organization"
                }
              </Text>
            </Link>
          </NextLink>
        </Flex>
        <Flex
          borderRadius={"10px"}
          h={"fit-content"}
          boxShadow={"md"}
          direction={"column"}
        >
          <NextLink
            href="https://github.com/danilowoz/create-content-loader/pull/180"
            passHref
          >
            <Link target="_blank" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius={"10px"}
                w="100%"
                mb={"0.8rem"}
                src="./testimonial.png"
              ></Image>

              <Text fontSize={"1.2rem"} px="0.8rem">
                Customer Testimonial Skeleton:
              </Text>
              <Text color="gray" fontSize={"1rem"} px="0.8rem" pb="0.8rem">
                Content Loader for customer testimonials to be shown while its
                data is being fetched, contributed to the package
                react-content-loader
              </Text>
            </Link>
          </NextLink>
        </Flex>
        <Flex
          borderRadius={"10px"}
          h={"fit-content"}
          boxShadow={"md"}
          direction={"column"}
        >
          <NextLink
            href="https://github.com/harish-sethuraman/readme-components#star-rating-component"
            passHref
          >
            <Link target="_blank" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius={"10px"}
                w="100%"
                mb={"0.8rem"}
                src="./star.png"
              ></Image>
              <Text fontSize={"1.2rem"} px="0.8rem">
                Star-rating component:
              </Text>
              <Text color="gray" fontSize={"1rem"} px="0.8rem" pb="0.8rem">
                A component to showcase your skill level in the form of stars,
                contributed to the package readme-components
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </>
  );
};

export default Contributions;
