import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../assets/logo.webp";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="1700px">
      <HStack padding="10px" justifyContent="space-between">
        <Image src={logo} width="80px" />

        <Flex justifyContent="space-between" px={10} py={4} align="center">
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            textColor="#FFFFFF"
          >
            <Link href="/about" fontSize={18}>
              Sentiment List
            </Link>
            <Link href="/services" fontSize={18}>
              Legendaries
            </Link>
            <Link href="/contact" fontSize={18}>
              Documentation
            </Link>
          </HStack>

          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }} // Show on mobile, hide on desktop
            onClick={onOpen}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={6} mt={10}>
                <Link href="/about" onClick={onClose}>
                  Sentiment List
                </Link>
                <Link href="/services" onClick={onClose}>
                  Legendaries
                </Link>
                <Link href="/contact" onClick={onClose}>
                  Documentation
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Container>
  );
};

export default NavBar;
