import React from 'react';
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaUpload, FaTrophy } from 'react-icons/fa';
import logo from '../assets/image/FunFund_logo.jpeg'
import FunImage from '../assets/image/FunFund image.jpeg'



const MemeMarketplace: React.FC = () => {
  return (
    <Box
      id="marketplace"
      py={10}
      px={5}
      bg={useColorModeValue('purple.100', 'gray.700')}
      color={useColorModeValue('gray.900', 'white')}
      textAlign="center"
    >
      <Heading as="h2" size="2xl" mb={6} color="teal.400">
        Welcome to the Meme Marketplace
      </Heading>
      <Text fontSize="xl" mb={6}>
        Upload your funniest memes, participate in contests, and trade meme-based NFTs!
      </Text>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        justify="center"
        align="center"
        mb={8}
      >
        <ActionButton label="Upload Meme" icon={FaUpload} />
        <ActionButton label="Join Contest" icon={FaTrophy} />
      </Stack>

      <MemeGrid />
    </Box>
  );
};

// Action Button Component
const ActionButton: React.FC<{ label: string; icon: React.ElementType }> = ({ label, icon }) => (
  <Button
    leftIcon={<Icon as={icon} />}
    colorScheme="teal"
    size="lg"
    variant="solid
    _hover={{
      bg: 'teal.500',
      transform: 'scale(1.05)',
      transition: 'transform 0.2s ease-in-out',
      boxShadow: 'lg',
    }}
  >
    {label}
  </Button>
);

// Meme Grid Component
const MemeGrid: React.FC = () => {
  const memes = [
    { id: 1, title: 'Hilarious Meme ', imageUrl: logo },
    { id: 2, title: ' Meme Meme', imageUrl: FunImage },
    { id: 3, title: 'Comic Meme ', imageUrl: logo },
    { id: 4, title: 'Funny Meme ', imageUrl: FunImage },
  ];

  return (
    <VStack spacing={6}>
      <Heading as="h3" size="lg" mb={4}>
        Trending Memes
      </Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center">
        {memes.map((meme) => (
          <MemeCard key={meme.id} title={meme.title} imageUrl={meme.imageUrl} />
        ))}
      </Stack>
    </VStack>
  );
};

// Meme Card Component
const MemeCard: React.FC<{ title: string; imageUrl: string }> = ({ title, imageUrl }) => (
  <Box
    bg="white"
    boxShadow="xl"
    rounded="lg"
    overflow="hidden"
    _hover={{
      transform: 'scale(1.05)',
      transition: 'transform 0.2s ease-in-out',
      boxShadow: '2xl',
    }}
    maxW="250px"
  >
    <Image src={imageUrl} alt={title} />
    <Box p={4}>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
    </Box>
  </Box>
);

export default MemeMarketplace;
