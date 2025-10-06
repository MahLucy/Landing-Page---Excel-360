'use client'

import { Box, Text, HStack, VStack } from '@chakra-ui/react'

export default function precoEstilizado() {
  return (
    <VStack align="start" spacing={2}>
      <HStack align="baseline" spacing={2}>
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold">
          12X
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="extrabold" color="green.600">
          R$
        </Text>
        <Text
          fontSize={{ base: '7xl', md: '8xl' }}
          fontWeight="extrabold"
          lineHeight="0.9"
          color="green.600"
        >
          8
        </Text>
        <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="green.600">
          ,30
        </Text>
      </HStack>

      <Box>
        <Text fontSize="lg" color="gray.700">
          Ou R$ 100,00 à vista, preço único.
        </Text>
        <Text fontSize="lg" fontWeight="extrabold" color="gray.800">
          Sem surpresas.
        </Text>
      </Box>
    </VStack>
  )
}
