'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
const Links = [
  { text: 'About', href: '#about' },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

interface Props {
  children: React.ReactNode;
  href: string;
}

const MotionBox = motion(Box);

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <MotionBox
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      className='text-xl'
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionBox>
  );
};


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.300', 'gray.900')} className="bg-gray-400" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box className='font-bold text-xl '>Harsh Saini</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} marginLeft={20}>
              {Links.map((link) => (
                <NavLink   key={link.text}  href={link.href}>{link.text} </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    "/assets/meditation.jpg"
                  }
                />
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link,index) => (
                <NavLink key={index} href={link.href}>{link.text}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  )
}