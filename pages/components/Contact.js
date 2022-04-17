import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box width={"100vmax"}>
      <Text mb={"0.8rem"} fontWeight={"bold"} mx="3rem" fontSize={"3rem"}>
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
          {"Let's Connect"}
        </span>
      </Text>
      <Box
        mx="3rem"
        display={"flex"}
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={"space-between"}
        mb="5rem"
      >
        <Flex
          mb={["0.5rem", "0.5rem", "0.5rem", 0]}
          justifyContent={"space-between"}
          direction={"column"}
        >
          <Text
            mb={["0.5rem", "0.5rem", "0.5rem", 0]}
            fontSize={["1.2rem", "1.2rem", "1.2rem", "1rem"]}
          >
            {"Want to get in touch? Just drop me a message!"}
          </Text>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={"space-between"}
            mt="0.2rem"
          >
            <Flex mb={["0.5rem", "0.5rem", "0.5rem", 0]} alignItems="center">
              <Image
                alt={"gmail"}
                mr="0.8rem"
                width={[10, 10, 10, 8]}
                height={[10, 10, 10, 8]}
                src={"./gmail.svg"}
              />
              <NextLink href="mailto:pranaybinju2810@gmail.com" passHref>
                <Link fontSize={"1.1rem"} fontWeight={700} mr="1.5rem">
                  pranaybinju2810@gmail.com
                </Link>
              </NextLink>
            </Flex>

            <Flex mb={["0.8rem", "0.8rem", "0.8rem", 0]}>
              <Flex alignItems="center">
                <NextLink
                  href="https://www.linkedin.com/in/pranay-binju-94b7bb180/"
                  passHref
                >
                  <Link>
                    <Image
                      alt={"linkedin"}
                      _hover={{
                        transform: "scale(1.2)",
                      }}
                      mr="0.5rem"
                      width={[10, 10, 10, 8]}
                      height={[10, 10, 10, 8]}
                      src={"./linkedin.svg"}
                    />
                  </Link>
                </NextLink>
                <NextLink
                  href="https://www.reddit.com/user/pranayB2810"
                  passHref
                >
                  <Link>
                    <Image
                      alt={"reddit"}
                      _hover={{
                        transform: "scale(1.2)",
                      }}
                      width={[10, 10, 10, 8]}
                      height={[10, 10, 10, 8]}
                      src={"./reddit.png"}
                    />
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex justifyContent={"space-between"} direction={"column"}>
          <Text
            mb={["0.8rem", "0.8rem", "0.8rem", 0]}
            fontSize={["1.2rem", "1.2rem", "1.2rem", "1rem"]}
          >
            Discover me here 👇
          </Text>
          <Flex
            justifyContent={[
              "flex-start",
              "flex-start",
              "flex-start",
              "flex-end",
            ]}
            alignItems={"center"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <NextLink href="https://github.com/pranaybinju" passHref>
                <Link>
                  <Image
                    alt={"github"}
                    mr="0.5rem"
                    width={[12, 12, 12, 8]}
                    height={[12, 12, 12, 8]}
                    src={"./github.svg"}
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                  />
                </Link>
              </NextLink>
              <NextLink
                href="https://stackoverflow.com/users/4397508/pranay-binju"
                passHref
              >
                <Link>
                  <Image
                    alt={"stack-overflow"}
                    mr="0.5rem"
                    width={[10, 10, 10, 7]}
                    height={[10, 10, 10, 7]}
                    src={"./stack-overflow.svg"}
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                  />
                </Link>
              </NextLink>

              <NextLink href="https://leetcode.com/pranaybinju2810/" passHref>
                <Link>
                  <Image
                    alt={"leetcode"}
                    width={[10, 10, 10, 7]}
                    height={[10, 10, 10, 7]}
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                    src={"./leetcode.svg"}
                  />
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
