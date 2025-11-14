'use client'

import { Box, Button, Container, HStack, Spacer } from '@chakra-ui/react'
import { Logo } from './logo'
import { MobilePopover } from './mobile-popover'
import { NavbarLinks } from './navbar-links'

export const Block = () => {
  return (
    <Box borderBottomWidth="1px" bg="bg.panel">
      <Container py={{ base: '3.5', md: '4' }}>
        <HStack justify="space-between">
          <Logo />
          <Spacer hideFrom="lg" />
          <NavbarLinks hideBelow="lg" />
          <Button size={{ base: 'sm' }} bg="brand.500" color="white" _hover={{ bg: "brand.600" }} _active={{ bg: "brand.700" }}>Start Free Trial</Button>
          <MobilePopover hideFrom="lg">
            {({ onClose }) => <NavbarLinks onLinkClick={onClose} />}
          </MobilePopover>
        </HStack>
      </Container>
    </Box>
  )
}
