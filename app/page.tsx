import { Box, Button, Heading, Text, Stack, Container } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

export default function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <Box position="absolute" top={4} right={4}>
        <ColorModeButton />
      </Box>
      
      <Stack gap={8} align="center" textAlign="center" mt={20}>
        <Heading size="4xl" fontWeight="bold">
          Welcome to Microlabs
        </Heading>
        
        <Text fontSize="xl" color="gray.600" maxW="2xl">
          Built with Next.js 15, Chakra UI v3, TypeScript, and optimized with Turbo
        </Text>
        
        <Stack direction="row" gap={4}>
          <Button 
            bg="brand.500" 
            color="white"
            size="lg"
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            borderColor="brand.500"
            color="brand.500"
            size="lg"
            _hover={{ bg: "brand.50" }}
          >
            Learn More
          </Button>
        </Stack>
        
        <Box mt={10} p={8} bg="gray.50" borderRadius="lg" maxW="2xl">
          <Heading size="lg" mb={4}>
            Features
          </Heading>
          <Stack gap={3} textAlign="left">
            <Text>✅ Turbo for fast builds and development</Text>
            <Text>✅ Chakra UI v3 with color mode support</Text>
            <Text>✅ Optimized bundle configuration</Text>
            <Text>✅ TypeScript for type safety</Text>
            <Text>✅ Next.js 15 App Router</Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
