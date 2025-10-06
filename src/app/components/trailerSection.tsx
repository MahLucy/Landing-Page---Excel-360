'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Center,
  AspectRatio,
} from '@chakra-ui/react'

export function TrailerSection() {
  return (
    <Box py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12 }}
          alignItems="center"
        >
          {/* LEFT — Trailer (placeholder ou iframe) */}
          <AspectRatio ratio={16 / 9} rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="#CFEAE2">
            {/* Placeholder centralizado (troque por seu iframe abaixo) */}
            <Center w="100%" h="100%">
              <Text fontWeight="semibold" color="gray.700">
                trailer do curso
              </Text>
            </Center>

            {/*
            👉 Quando tiver o vídeo, remova o Center acima e descomente:
            <Box as="iframe"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Trailer do curso"
              w="100%"
              h="100%"
            />
            */}
          </AspectRatio>
          {/* RIGHT — Texto */}
          <Stack spacing={4}>
            <Heading
              as="h2"
              size="lg"
              lineHeight="1.1"
              fontWeight="regular"
              color="#363636"
              paddingLeft="5vh"
              marginBottom="-3vh"
              fontFamily={'inter'}
            >
              Chega de
            </Heading>

            <Heading
              as="h1"
              size="4xl"
              lineHeight="0.95"
              color="#25A86F"
              mb={2}
              fontFamily={'inter'}
            >
              desculpas
            </Heading>

            <Text fontSize="lg" color="#70869C" maxW="ch" fontFamily={"montserrat"}>
              <Box as="span" fontWeight="bold">
                No Excel 360 você aprende do zero,
              </Box>{' '}
              com aulas práticas e didáticas, a dominar planilhas, relatórios e
              dashboards que agilizam seu dia a dia e impressionam no trabalho.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
