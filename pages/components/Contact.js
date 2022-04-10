import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Contact = () => {
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
          {"Let's Connect"}
        </span>
      </Text>
      <Box
        mx="3rem"
        display={"grid"}
        gridGap="1rem"
        gridTemplateColumns="1fr 1fr"
        mb="5rem"
      >
        <Flex justifyContent={"space-between"} direction={"column"}>
          <Text>
            {`"I'm currently not looking out for new opportunites but I'm always
            there to connect when I have the time. Just drop me a message!"`}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Flex alignItems="center">
              <Image mr="0.8rem" width={8} height={8} src={"./gmail.svg"} />
              <NextLink href="mailto:pranaybinju2810@gmail.com" passHref>
                <Link textDecoration={"underline"} color="gray">
                  pranaybinju2810@gmail.com
                </Link>
              </NextLink>
            </Flex>

            <Flex>
              <Flex alignItems="center">
                <NextLink
                  href="https://www.linkedin.com/in/pranay-binju-94b7bb180/"
                  passHref
                >
                  <Link>
                    <Image
                      mr="0.8rem"
                      width={10}
                      height={10}
                      src={"./linkedin.svg"}
                    />
                  </Link>
                </NextLink>
                <NextLink
                  href="https://www.reddit.com/user/pranayB2810"
                  passHref
                >
                  <Link>
                    <Image width={8} height={8} src={"./reddit.png"} />
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex justifyContent={"space-between"} direction={"column"}>
          <Text textAlign={"right"}>You can also discover me here 👇</Text>
          <Flex alignItems={"center"} justifyContent="flex-end">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <NextLink href="https://github.com/pranaybinju" passHref>
                <Link>
                  <Image
                    mr="0.8rem"
                    width={8}
                    height={8}
                    src={"./github.svg"}
                  />
                </Link>
              </NextLink>
              <NextLink
                href="https://stackoverflow.com/users/4397508/pranay-binju"
                passHref
              >
                <Link>
                  <Image
                    mr="0.8rem"
                    width={7}
                    height={7}
                    src={"./stack-overflow.svg"}
                  />
                </Link>
              </NextLink>

              <NextLink href="https://leetcode.com/pranaybinju2810/" passHref>
                <Link>
                  <Image width={7} height={7} src={"./leetcode.svg"} />
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
