'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import RaulMentor from '@/app/imagens/Raul_Mentor.png'

export default function MentorSection() {
  return (
    <Box py={{ base: 10, md: 20 }}>
      <Container maxW="7xl">
        {/* Títulos */}
        <Stack spacing={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            fontFamily="inter"
            color="#26262A"
            fontWeight="bold"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          >
            Conheça seu mentor
          </Heading>
          <Text
            color="#70869C"
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Conheça o seu Mentor.
          </Text>
        </Stack>

        {/* Wrapper com a borda verde por trás */}
        <Box position="relative">
          {/* Borda ao fundo (some no xs para não “apertar” o layout) */}
          <Box
            position="absolute"
            insetX={{ base: 2, sm: 4, md: 0 }}     // controla margens laterais por breakpoint
            top={{ base: 8, md: 12 }}
            bottom={{ base: 2, md: 6 }}
            border="2px solid"
            borderColor="#19C174"
            borderRadius="xl"
            zIndex={0}
            display={{ base: 'none', sm: 'block' }}
          />

          <Grid
            templateColumns={{ base: '1fr', md: '5fr 7fr' }}
            gap={{ base: 6, md: 12 }}
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            {/* Coluna esquerda: imagem */}
            <GridItem>
              <Box
                position="relative"
                w="full"
                maxW={{ base: '90%', sm: '80%', md: '100%' }}
                mx={{ base: 'auto', md: 0 }}
              >
                <Image
                  src={RaulMentor.src}
                  alt="Raul Siqueira"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 768px) 90vw, (max-width: 992px) 80vw, 600px"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </Box>
            </GridItem>

            {/* Coluna direita: conteúdo */}
            <GridItem w="full" pt={{ base: 2, md: '5rem' }} pl={{ md: 0 }}>
              <Stack spacing={{ base: 4, md: 6 }} >
                <Text
                  fontFamily="montserrat"
                  color="#26262A"
                  fontWeight="medium"
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: 1.6, md: 1.7 }}
                   
                >
                  <Text as="span" fontWeight="bold" fontFamily="montserrat" color="#26262A" >
                    Raul Siqueira
                  </Text>{' '}
                  é analista sênior de dados, com mais de 8 anos de experiência em
                  empresas de diversos setores — de contabilidade e RH a logística, vendas e
                  marketing. Durante a carreira, usou o Excel como ferramenta principal para
                  analisar, automatizar e apresentar dados de forma simples e eficiente.
                </Text>

                <Text
                  fontFamily="montserrat"
                  color="#26262A"
                  fontWeight="medium"
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: 1.6, md: 1.7 }}
                >
                  Mais do que dominar fórmulas, Raul acredita que o Excel é uma forma de
                  trabalhar com inteligência, organização e agilidade — e é exatamente isso
                  que ele ensina no Excel 360.
                </Text>

                <Text
                  as="span"
                  fontWeight="bold"
                  fontFamily="montserrat"
                  color="#26262A"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  Missão:
                </Text>

                <Text
                  fontFamily="montserrat"
                  color="#26262A"
                  fontWeight="medium"
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: 1.6, md: 1.7 }}
                >
                  “Eu criei este curso pensando em quem, como eu no início, precisava de um
                  aprendizado acessível, direto e que fizesse diferença de verdade no
                  trabalho. Meu objetivo é te ajudar a dominar o Excel — e ganhar tempo,
                  confiança e liberdade no seu dia a dia.”
                </Text>

                <Box pt={{ base: 1, md: 2 }} as="a" href="#preco" style={{ textDecoration: 'none' }}>
                  <Button
                    size={{ base: 'md', md: 'lg' }}
                    bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
                    color="white"
                    borderRadius="lg"
                    w={{ base: 'full', sm: 'auto' }}
                    px={{ base: 6, md: 12 }}     // padding responsivo
                    fontFamily="inter"
                    fontWeight="bold"
                    _hover={{ bg: 'green.700' }}
                  >
                    QUERO ME INSCREVER
                  </Button>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
