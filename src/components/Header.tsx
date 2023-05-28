import { Box, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => (
  <>
    <Heading as="h1" size="xl" mb={4}>
      React TypeScript MobX app
    </Heading>

    <Box>
      <Button as={NavLink} to="/" mr={5}>
        Cars List
      </Button>

      <Button as={NavLink} to="/add-car">
        Add Car
      </Button>
    </Box>
  </>
);

export default Header;
