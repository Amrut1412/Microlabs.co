import { Container, SimpleGrid, Stack } from '@chakra-ui/react'
import { SectionHeader } from './section-header'
import { data } from './data'
import { TestimonialCard } from './testimonial-card'

export const Block = () => (
  <Container py={{ base: '14', md: '14' }}  maxW="5xl" 
  mx="auto" >
    <Stack gap="12">
      <SectionHeader
        align="center"
        textAlign="center"
        tagline="Testimonials"
        headline="What Our Users Say"
        description="Discover how Microlabs is helping businesses grow and succeed."
      />
      <SimpleGrid gap="6" columns={{ base: 1, md: 3 }}>
        {data.map((item) => (
          <TestimonialCard key={item.authorName} data={item} />
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
