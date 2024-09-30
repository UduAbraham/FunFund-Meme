import React from 'react';
import { Box, Heading, Stack, Button, Icon, } from '@chakra-ui/react';
import { FaTelegram, FaTwitter, FaReddit } from 'react-icons/fa';

const CommunitySection: React.FC = () => {
  return (
    <Box id="community" p={5} bg="gray.200">
      <Heading as="h2" size="xl" mb={5} textAlign="center">
        Join the FunFundCoin Community
      </Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
        <CommunityButton
          href="https://telegram.org/"
          icon={FaTelegram}
          label="Telegram"
        />
        <CommunityButton
          href="https://twitter.com/"
          icon={FaTwitter}
          label="Twitter"
        />
        <CommunityButton
          href="https://reddit.com/"
          icon={FaReddit}
          label="Reddit"
        />
      </Stack>
    </Box>
  );
};

interface CommunityButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const CommunityButton: React.FC<CommunityButtonProps> = ({ href, icon, label }) => (
  <Button
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    leftIcon={<Icon as={icon} />}
    colorScheme="teal"
    variant="outline"
    _hover={{ transform: 'scale(1.05)', bg: 'teal.500', color: 'white' }}
  >
    {label}
  </Button>
);

export default CommunitySection;
