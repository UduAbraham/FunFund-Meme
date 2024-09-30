// Tokenomics.tsx
import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
//   UnorderedList,
//   ListItem,
  Progress,
} from "@chakra-ui/react";

const Tokenomics: React.FC = () => {
  return (
    <Box
      as="section"
      py={10}
      px={6}
      maxW="800px"
      mx="auto"
      bg="gray.50"
      borderRadius="lg"
      boxShadow="lg"
      id="tokenomics"
    >
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="blue.500">
        Tokenomics
      </Heading>

      <Text fontSize="lg" mb={6} textAlign="center">
        FunFundCoin (FNF) is distributed with a focus on community rewards,
        liquidity, and charitable donations. Here's the breakdown:
      </Text>

      <Stack spacing={6}>
        {/* Total Supply */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2} paddingLeft={{base:"",md:"15rem"}} >
            Total Supply: 1,000,000,000 FNF
          </Text>
          <Progress colorScheme="blue" value={100} />
        </Box>

        {/* Community Rewards */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2} paddingLeft={{base:"",md:"16rem"}}>
            Community Rewards: 85%
          </Text>
          <Progress colorScheme="green" value={85} />
          <Text mt={2}>
            Half of the total supply is reserved for rewarding the community for
            participating in contests, creating memes, and more.
          </Text>
        </Box>

        {/* Liquidity Pool */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2} paddingLeft={{base:"",md:"18rem"}}>
            Liquidity Pool: 30%
          </Text>
          <Progress colorScheme="purple" value={30} />
          <Text mt={2}>
            A significant portion is allocated to ensure smooth trading and
            price stability in exchanges.
          </Text>
        </Box>

        {/* Development */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2} paddingLeft={{base:"",md:"19rem"}}>
            Development: 10%
          </Text>
          <Progress colorScheme="orange" value={10} />
          <Text mt={2}>
            This portion is dedicated to further development of the platform and
            future feature implementations.
          </Text>
        </Box>

        {/* Charity */}
        <Box>
          <Text fontWeight="bold" fontSize="lg" mb={2}paddingLeft={{base:"",md:"20rem"}}>
            Charity: 10%
          </Text>
          <Progress colorScheme="red" value={10} />
          <Text mt={2}>
            FunFundCoin is committed to making the world a better place. 10% of
            the supply goes to charitable causes.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tokenomics;
