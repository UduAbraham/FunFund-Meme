import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane, FaReddit } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("blue.900", "gray.800")}
      color={useColorModeValue("gray.100", "gray.200")}
      py={10}
    >
      <Container maxW="6xl">
        <VStack spacing={5}>
          {/* Links */}
          <HStack spacing={8}>
            <Link
              href="#about"
              _hover={{ textDecoration: "none", color: "teal.400" }}
            >
              About Us
            </Link>
            <Link
              href="#services"
              _hover={{ textDecoration: "none", color: "teal.400" }}
            >
              Services
            </Link>
            <Link
              href="#terms"
              _hover={{ textDecoration: "none", color: "teal.400" }}
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              _hover={{ textDecoration: "none", color: "teal.400" }}
            >
              Privacy Policy
            </Link>
          </HStack>

          <Divider />

          {/* Social Media Links */}
          <Stack direction="row" spacing={6}>
            <IconButton
              as="a"
              href="https://twitter.com/"
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
              _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
            />
            <IconButton
              as="a"
              href="https://telegram.org/"
              aria-label="Telegram"
              icon={<FaTelegramPlane />}
              colorScheme="telegram"
              _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
            />
            <IconButton
              as="a"
              href="https://reddit.com/"
              aria-label="Reddit"
              icon={<FaReddit />}
              colorScheme="red"
              _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
            />
          </Stack>

          <Divider />

          {/* Copyright */}
          <Text fontSize="sm" textAlign="center">
            &copy; {new Date().getFullYear()} GiggleCoin. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
