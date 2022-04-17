import React from "react";
import { Box } from "@chakra-ui/react";

import Intro from "./Intro";

import Skills from "./Skills";
import Contributions from "./Contributions";
import Contact from "./Contact";
const Content = () => {
  return (
    <Box
      minH={["none", "none", "none", "none", "500vh"]}
      flex={1}
      display="flex"
      flexDirection="column"
      w="100%"
    >
      <Intro></Intro>
      <Skills></Skills>
      <Contributions></Contributions>
      <Contact></Contact>
    </Box>
  );
};

export default Content;
