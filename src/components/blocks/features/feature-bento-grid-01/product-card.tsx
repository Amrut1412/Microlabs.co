"use client"

import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { 
  LuArrowRight, 
  LuSparkles, 
  LuPenTool,
  LuLinkedin,
  LuScale,
  LuPresentation,
  LuChefHat
} from 'react-icons/lu'

interface ProductCardProps {
  name: string
  domain: string
  description: string
  tagline: string
  tags: string[]
  isPopular?: boolean
}

const productIcons: Record<string, any> = {
  'seoengine.ai': LuPenTool,
  'autoposting.ai': LuLinkedin,
  'niyam.ai': LuScale,
  'happydemo.io': LuPresentation,
  'jalpaan.ai': LuChefHat,
}

export const ProductCard = (props: ProductCardProps) => {
  const { name, domain, description, tagline, tags, isPopular } = props
  const ProductIcon = productIcons[domain] || LuSparkles

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      height="full"
      boxShadow={isPopular ? '0 20px 60px -15px rgba(2, 62, 138, 0.4)' : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'}
      _hover={{ 
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: isPopular ? '0 25px 70px -10px rgba(2, 62, 138, 0.5)' : '0 20px 50px -10px rgba(2, 62, 138, 0.3)',
      }}
    >
      <Box
        p="8"
        borderRadius="2xl"
        height="full"
        position="relative"
        overflow="hidden"
        bg={isPopular 
          ? 'linear-gradient(135deg, var(--chakra-colors-brand-50) 0%, var(--chakra-colors-brand-100) 50%, var(--chakra-colors-brand-50) 100%)'
          : 'bg.panel'
        }
        borderWidth="2px"
        borderColor={isPopular ? 'brand.300' : 'border.emphasized'}
      >
        {/* Background Decorative Elements */}
        <Box
          position="absolute"
          top="-20px"
          right="-20px"
          width="120px"
          height="120px"
          borderRadius="full"
          bg={isPopular ? 'brand.200' : 'gray.100'}
          opacity="0.4"
          filter="blur(30px)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-30px"
          left="-30px"
          width="150px"
          height="150px"
          borderRadius="full"
          bg={isPopular ? 'brand.300' : 'gray.200'}
          opacity="0.3"
          filter="blur(40px)"
          pointerEvents="none"
        />

        {/* Top Accent Bar */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="6px"
          background={isPopular 
            ? 'linear-gradient(90deg, var(--chakra-colors-brand-400), var(--chakra-colors-brand-600), var(--chakra-colors-brand-400))'
            : 'linear-gradient(90deg, var(--chakra-colors-gray-200), var(--chakra-colors-gray-300), var(--chakra-colors-gray-200))'
          }
          backgroundSize="200% 100%"
          animation={isPopular ? 'shimmer 3s infinite' : 'none'}
        />

        <Stack gap="6" height="full" position="relative" zIndex="1">
          {/* Popular Badge */}
          {isPopular && (
            <Badge
              position="absolute"
              top="-8"
              right="-8"
              variant="solid"
              size="sm"
              colorPalette="brand"
              display="flex"
              alignItems="center"
              gap="1.5"
              px="4"
              py="2"
              borderRadius="full"
              fontWeight="bold"
              boxShadow="0 6px 16px rgba(2, 62, 138, 0.4)"
              animation="pulse 2s ease-in-out infinite"
            >
              <LuSparkles size="14" />
              Most Popular
            </Badge>
          )}

          {/* Product Icon Header */}
          <Stack gap="4">
            <HStack gap="4" align="start">
              <Box
                p="4"
                borderRadius="xl"
                bg={isPopular ? 'brand.solid' : 'brand.muted'}
                color={isPopular ? 'white' : 'brand.solid'}
                boxShadow={isPopular ? '0 8px 20px rgba(2, 62, 138, 0.3)' : 'none'}
                transition="all 0.3s"
                _groupHover={{
                  transform: 'rotate(5deg) scale(1.1)',
                }}
              >
                <Icon fontSize="3xl">
                  <ProductIcon />
                </Icon>
              </Box>
              <Stack gap="1" flex="1" pt="1">
                <Heading 
                  size="xl" 
                  fontWeight="bold" 
                  color={isPopular ? 'brand.900' : 'brand.solid'}
                  letterSpacing="-0.03em"
                  lineHeight="1.2"
                >
                  {name}
                </Heading>
                <Text 
                  fontSize="xs" 
                  color="fg.muted"
                  fontFamily="mono"
                  fontWeight="medium"
                  bg={isPopular ? 'white' : 'bg.muted'}
                  px="2"
                  py="1"
                  borderRadius="md"
                  width="fit-content"
                >
                  {domain}
                </Text>
              </Stack>
            </HStack>

            {/* Tagline with gradient background */}
            <Box
              p="4"
              borderRadius="lg"
              bg={isPopular 
                ? 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))'
                : 'bg.muted'
              }
              borderLeftWidth="4px"
              borderLeftColor="brand.solid"
            >
              <Text 
                fontSize="md" 
                fontWeight="semibold" 
                lineHeight="1.5"
                color="fg.emphasized"
              >
                {tagline}
              </Text>
            </Box>
          </Stack>

          {/* Description */}
          <Text 
            color="fg.muted" 
            lineHeight="1.8" 
            flex="1"
            fontSize="sm"
            px="1"
          >
            {description}
          </Text>

          {/* Tags with improved styling */}
          <HStack gap="2" flexWrap="wrap">
            {tags.map((tag, index) => (
              <Badge
                key={tag}
                variant={isPopular && index === 0 ? "solid" : "subtle"}
                size="md"
                colorPalette="brand"
                px="3"
                py="1.5"
                borderRadius="lg"
                fontWeight="semibold"
                fontSize="xs"
                boxShadow={isPopular && index === 0 ? 'sm' : 'none'}
              >
                {tag}
              </Badge>
            ))}
          </HStack>

          {/* Learn More Button with enhanced styling */}
          <Button
            variant="solid"
            colorPalette="brand"
            size="xl"
            width="full"
            fontWeight="bold"
            borderRadius="xl"
            py="6"
            boxShadow={isPopular ? '0 6px 20px rgba(2, 62, 138, 0.3)' : 'md'}
            _hover={{
              boxShadow: '0 8px 30px rgba(2, 62, 138, 0.4)',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.3s"
            asChild
          >
            <a 
              href={`https://${domain}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <span>Explore {name.split('.')[0]}</span>
              <LuArrowRight size="18" />
            </a>
          </Button>
        </Stack>
      </Box>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </Box>
  )
}

