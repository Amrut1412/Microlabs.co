'use client'
import { Accordion, Button, Container, SimpleGrid, Span, Stack, Box, Text, VStack, Badge, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMail } from 'react-icons/lu'
import { SectionHeader } from './section-header'
import { faqs } from './data'

export const Block = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <Container py={10} maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '12', lg: '24' }}>
        <VStack gap={{ base: '4', md: '6' }} alignItems={'flex-start'}>
          <Badge variant="subtle" size="lg" colorPalette="brand">
            FAQ
          </Badge>

          <Heading as="h2" textStyle={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            Questions? We've Got Answers.
          </Heading>

          <Text color="fg.muted" textStyle={{ base: 'md', md: 'lg' }}>
            Everything you need to know about Microlabs products and pricing.
          </Text>
        </VStack>

        <Stack gap="8" flex="1">
          <Accordion.Root multiple defaultValue={[faqs[0].question]}>
            {faqs.slice(0, showAll ? faqs.length : 5).map(({ question, answer }) => (
              <Accordion.Item key={question} value={question}>
                <Accordion.ItemTrigger textStyle="lg" py="4">
                  <Span flex="1">{question}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent color="fg.muted">
                  <Accordion.ItemBody>{answer}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <Button
            size="xl"
            alignSelf="center"
            variant="outline"
            colorPalette="brand"
            onClick={() => setShowAll(true)}
            display={showAll ? 'none' : 'flex'}
          >
            Show more FAQs
          </Button>
        </Stack>
      </SimpleGrid>

      {/* Contact CTA Section */}
      <Box
        mt={{ base: '12', md: '12' }}
        p={{ base: '8', md: '10' }}
        bg="bg.muted"
        borderRadius="2xl"
        border="1px solid"
        borderColor="border"
        textAlign="center"
      >
        <Stack gap="4" maxW="2xl" mx="auto">
          <Text fontSize="2xl" fontWeight="semibold">
            Still Have Questions?
          </Text>
          <Text color="fg.muted" fontSize="lg">
            Email us at <Text as="a" href="mailto:hello@tinycheque.com" color="brand.500" fontWeight="medium">hello@tinycheque.com</Text>
          </Text>
          <Text color="fg.muted" fontSize="sm">
            We typically respond within a few hours during business hours.
          </Text>
        </Stack>
      </Box>
    </Container>
  )
}
