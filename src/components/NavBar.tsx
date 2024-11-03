import { Container, HStack, Heading, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Container maxW="1700px">
      <HStack>
        <Image src={logo} width="80px" />
        <Heading>TwitSentiment</Heading>
      </HStack>
    </Container>
  );
};

export default NavBar;
