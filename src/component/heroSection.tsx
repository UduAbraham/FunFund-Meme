// HeroSection.tsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  // Image,
  Flex,
} from "@chakra-ui/react";
import FunImage from '../assets/image/FunFund image.jpeg'

const HeroSection: React.FC = () => {
  return (
    <Box
      as="section"
      bg="gray.800"
      color="white"
      py={{ base: "6xl", md: "7rem" }}
      px={{ base: "20px", md: "50px" }}
      textAlign={{ base: "center", md: "left" }}
      bgImage={FunImage} // You can replace this with your image URL
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      {/* Overlay to make text stand out */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        zIndex={2}
        position="relative"
      >
        {/* Left Content */}
        <Stack
          spacing={6}
          maxW="600px"
          zIndex={2}
          align={{ base: "center", md: "flex-start" }}
        >
          <Heading as="h1" size="2xl" lineHeight="shorter" color="yellow.400">
            Welcome to FunFund meme
          </Heading>
          <Text fontSize="xl" color="gray.200">
            The fun and rewarding meme coin. Spread laughter, earn rewards, and
            be part of a joyful community!
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button colorScheme="yellow" size="lg">
              Get Started
            </Button>
            <Button colorScheme="whiteAlpha" size="lg">
              Learn More
            </Button>
          </Stack>
        </Stack>

        {/* Right Visual or Image */}
        {/* <Image
          src={FunImage}
          alt="FunFund coin Visual"
          mt={{ base: 10, md: 0 }}
          maxW="300px"
          display={{ base: "none", md: "block" }} // Display image only on medium screens and above
          zIndex={2}
        /> */}
      </Flex>
    </Box>
  );
};

export default HeroSection;
