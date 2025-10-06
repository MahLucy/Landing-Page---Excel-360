'use client'
import { Box, Container, Flex, Text, HStack, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="#F9F9F9" py={4} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="7xl">
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
        >
          {/* Texto à esquerda */}
          <Text fontSize="sm" color="#26262A" fontWeight="semibold" fontFamily={"montserrat"}>
            Freesquad® & EXCEL360 · 2025
          </Text>

          {/* Links à direita */}
          <HStack spacing={6} fontSize="sm" fontFamily={"inter"} color='#26262A'>
            <Link href="#curriculo" _hover={{ textDecoration: 'underline' }}>
              Currículo
            </Link>
            <Link href="#preco" _hover={{ textDecoration: 'underline' }}>
              Preço
            </Link>
            <Link href="#avaliacoes" _hover={{ textDecoration: 'underline' }}>
              Avaliações
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
