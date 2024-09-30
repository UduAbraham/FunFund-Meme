// Roadmap.tsx
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Chakra UI + Framer Motion box component
const MotionBox = motion(Box);

// Data for the roadmap milestones
const roadmapData = [
  {
    id: 1,
    title: 'Phase 1: Project Initiation',
    description: 'Concept development, team assembly, and initial marketing strategies.',
    bgColor: 'blue.400',
  },
  {
    id: 2,
    title: 'Phase 2: Token Launch',
    description: 'Launch FunFundCoin (FNF) on decentralized exchanges.',
    bgColor: 'green.400',
  },
  {
    id: 3,
    title: 'Phase 3: Community Expansion',
    description: 'Build a strong community and start viral meme marketing campaigns.',
    bgColor: 'yellow.400',
  },
  {
    id: 4,
    title: 'Phase 4: Meme Marketplace Launch',
    description: 'Launch the meme marketplace where users can trade NFTs and participate in contests.',
    bgColor: 'purple.400',
  },
  {
    id: 5,
    title: 'Phase 5: Ecosystem Development',
    description: 'Introduce staking, governance, and other utility features for FNF holders.',
    bgColor: 'red.400',
  },
];

// Animation settings for each roadmap item
const roadmapVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Roadmap: React.FC = () => {
  return (
    <Box py={10} px={5} bg="gray.50" id="roadmap">
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Our Roadmap
      </Heading>

      <VStack spacing={8} align="stretch">
        {roadmapData.map((phase, index) => (
          <MotionBox
            key={phase.id}
            bg={phase.bgColor}
            p={8}
            borderRadius="md"
            color="white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.7 }}
            custom={index}
            variants={roadmapVariant}
          >
            <Heading size="md" mb={2}>
              {phase.title}
            </Heading>
            <Text>{phase.description}</Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Roadmap;
