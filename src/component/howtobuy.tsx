// HowToBuy.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Link,
//   Flex,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaWallet, FaEthereum, FaExchangeAlt } from 'react-icons/fa';

const HowToBuy: React.FC = () => {
  // Chakra UI color mode for light/dark theme
  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box bg={bg} py={10} px={5}
     rounded="lg" boxShadow="xl" textAlign="center"
     id="how to buy"
     >
      <Heading as="h2" mb={6} fontSize="3xl" color="blue.500">
        How to Buy FunFundCoin
      </Heading>

      <Text fontSize="lg" color={textColor} mb={8}>
        Follow these simple steps to get your hands on FunFundCoin (FNF) and join the fun!
      </Text>

      <VStack spacing={8} align="center" maxW="600px" mx="auto">
        {/* Step 1: Set up a Wallet */}
        <HStack spacing={4}>
          <Icon as={FaWallet} w={8} h={8} color="yellow.400" />
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Step 1: Set up a Wallet
            </Text>
            <Text fontSize="md">
              Download and set up MetaMask or Trust Wallet to store your FNF coins.
            </Text>
            <Button
              as={Link}
              href="https://metamask.io/"
              colorScheme="teal"
              mt={3}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download MetaMask
            </Button>
          </Box>
        </HStack>

        <Divider />

        {/* Step 2: Buy ETH or BNB */}
        <HStack spacing={4}>
          <Icon as={FaEthereum} w={8} h={8} color="purple.400" />
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Step 2: Buy Ethereum (ETH) or Binance Coin (BNB)
            </Text>
            <Text fontSize="md">
              Purchase Ethereum (ETH) or Binance Coin (BNB) from a trusted exchange like Coinbase or Binance.
            </Text>
            <HStack mt={3} spacing={4} display={{base:"colum", md:"row"}}>
              <Button
                as={Link}
                href="https://www.coinbase.com/"
                colorScheme="purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Coinbase
              </Button>
              <Button
                as={Link}
                href="https://www.binance.com/"
                colorScheme="yellow"
                target="_blank"
                rel="noopener noreferrer"
                 m={{base:"1rem",md:"1rem"}}
              >
                Buy on Binance
              </Button>
            </HStack>
          </Box>
        </HStack>

        <Divider />

        {/* Step 3: Swap ETH/BNB for GIG */}
        <HStack spacing={4}>
          <Icon as={FaExchangeAlt} w={8} h={8} color="green.400" />
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Step 3: Swap ETH/BNB for FunFundCoin (FNF)
            </Text>
            <Text fontSize="md">
              Use a decentralized exchange like Uniswap or PancakeSwap to swap your ETH or BNB for FunFundCoin.
            </Text>
            <HStack mt={3} spacing={4} display={{base:"colum", md:"row"}}>
              <Button
                as={Link}
                href="https://app.uniswap.org/"
                colorScheme="green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swap on Uniswap
              </Button>
              <Button
                as={Link}
                href="https://pancakeswap.finance/"
                colorScheme="orange"
                target="_blank"
                rel="noopener noreferrer"
                m={{base:"1rem",md:"1rem"}}
              >
                Swap on PancakeSwap
              </Button>
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HowToBuy;