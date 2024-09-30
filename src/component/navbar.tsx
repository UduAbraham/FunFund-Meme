// NavBar.tsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  // Button,
  Stack,
  useDisclosure,
  Image,
  Spacer,
  useColorModeValue,
  // Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/image/FunFund_logo.jpeg'

// import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

// Add your logo URL here

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" display="flex" alignItems="center">
            <Image src={logo} boxSize="40px" alt="Logo" />
            
          </Link>
        </Box>

        {/* Desktop links */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
        <NavLink href="#home" label="Home" />
            <NavLink href="#tokenomics" label="Tokenomics" />
            <NavLink href="#how to buy" label="How to Buy" />
            <NavLink href="#marketplace" label="MarketPlace" />
            <NavLink href="#roadmap" label="RoadMap" />
            <NavLink href="#community" label="Community" />
            <NavLink href="#footer" label="Footer" />
        </HStack>

        <Spacer />

        {/* Action buttons */}
        {/* <HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
          <ActionButton label="Twitter" icon={FaTwitter} href="https://twitter.com/" />
          <ActionButton label="Telegram" icon={FaTelegramPlane} href="https://telegram.org/" />
        </HStack> */}

        {/* Mobile Hamburger Menu */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          backgroundColor="grey"
          color="white"
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
          <NavLink  href="#home" label="HOME" />
            <NavLink href="#tokenomics" label="TOKENOMICS" />
            <NavLink href="#how to buy" label="HOW TO BUY" />
            <NavLink href="#marketplace" label="MARKETPLACE" />
            <NavLink href="#roadmap" label="ROADMAP" />
            <NavLink href="#community" label="COMMUNITY" />
            <NavLink href="#footer" label="FOOTER" />
            {/* <ActionButton label="Twitter" icon={FaTwitter} href="https://twitter.com/" />
            <ActionButton label="Telegram" icon={FaTelegramPlane} href="https://telegram.org/" /> */}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// Navigation Link Component
const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{ textDecoration: 'none', bg: useColorModeValue('blue.200', 'blue.700') }}
    href={href}
  >
    {label}
  </Link>
);

// Action Button Component
// const ActionButton: React.FC<{ label: string; icon: React.ElementType; href: string }> = ({
//   label,
//   icon,
//   href,
// }) => (
//   <Button
//     as="a"
//     href={href}
//     target="_blank"
//     leftIcon={<Icon as={icon} />}
//     colorScheme="teal"
//     variant="solid"
//     _hover={{
//       transform: 'scale(1.05)',
//       transition: 'transform 0.2s ease-in-out',
//       boxShadow: 'lg',
//     }}
//   >
//     {label}
//   </Button>
// );

export default NavBar;
