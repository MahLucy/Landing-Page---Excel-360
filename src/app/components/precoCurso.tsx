'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  HStack,
  Icon,
  Button,
  Divider,
  VStack,
  Image,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Estrela from '@/app/imagens/Estrela.png'

export default function PrecoCurso() {
  return (
    <Box
      pos="relative"
      py={{ base: 12, md: 20 }}
      bgImage="url('/Fundo.png')"            // garanta que esteja em /public/Fundo.png
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container maxW="7xl" pos="relative">
        {/* Título / subtítulo */}
        <Stack spacing={3} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            fontFamily="inter"
            color="#26262A"
            fontWeight="bold"
            fontSize={{ base: 'xl', md: '2xl' }}
          >
            Preço Simplificado
          </Heading>
          <Text
            color="#70869C"
            maxW="3xl"
            mx="auto"
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Aprenda com aulas práticas e exercícios a criar planilhas, relatórios e
            dashboards de forma independente, impressionando chefes e recrutadores.
          </Text>
        </Stack>

        {/* Card */}
        <Box
          pos="relative"
          bg="white"
          rounded="2xl"
          px={{ base: 4, sm: 6, md: 10 }}
          py={{ base: 6, sm: 8, md: 10 }}
          boxShadow="0 20px 20px rgba(0, 0, 0, 0.18), 0 10px 30px rgba(0, 0, 0, 0.15)"
          _after={{
            content: '""',
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)',
            pointerEvents: 'none',
          }}
        >
          {/* Estrelinha -50% */}
          <Box
            pos="absolute"
            top={{ base: -4, sm: -6, md: -8, lg: -10 }}
            left={{ base: -4, sm: -6, md: -8, lg: -12 }}
            w={{ base: 20, sm: 24, md: 36, lg: 44 }}
            h={{ base: 20, sm: 24, md: 36, lg: 44 }}
            overflow="visible"
          >
            <Image
              src={Estrela.src}
              alt="Desconto"
              w="100%"
              h="100%"
              objectFit="contain"
              pointerEvents="none"
            />
            <Text
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize={{ base: 'xs', sm: 'sm', md: 'xl', lg: '4xl' }}
              fontWeight="bold"
              color="white"
              fontFamily="Montserrat"
              userSelect="none"
            >
              -50%
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 10 }}
            pl={{ base: 0, md: '5rem' }}
            pr={{ base: 0, md: '5rem' }}
            pt={{ base: 0, md: '5rem' }}
            alignItems="center"
          >
            {/* Coluna esquerda: preço */}
            <VStack align="start" spacing={{ base: 3, md: 4 }}>
              <Text
                fontSize={{ base: 'sm', md: 'lg' }}
                fontWeight="bold"
                color="#70869C"
                textDecoration="line-through"
                fontFamily="montserrat"
                alignSelf={{ base: 'center', md: 'flex-start' }}
              >
                De R$2.000,00
              </Text>

              <HStack w="full" justify={{ base: 'center', md: 'flex-start' }} align="end" spacing={{ base: 1, md: 1 }} alignItems="flex-end">
                <Box display="flex" alignItems="flex-start" flexDirection="column">
                  <Text
                    fontSize={{ base: '2xl', sm: '3xl', md: '3rem' }}
                    fontWeight="extrabold"
                    fontFamily="montserrat"
                    mb={{ base: '-4px', md: '1vh' }}
                    lineHeight="1"
                  >
                    12X
                  </Text>
                  <Text
                    fontSize={{ base: '3xl', sm: '4xl', md: '4rem' }}
                    fontWeight="extrabold"
                    color="#19C174"
                    mt={{ base: '-2px', md: '-1rem' }}
                    fontFamily="montserrat"
                    lineHeight="1"
                  >
                    R$
                  </Text>
                </Box>

                <Text
                  fontSize={{ base: '7rem', sm: '8rem', md: '8rem', lg: '10rem' }}  // ⬅️ Aumentado no mobile
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#19C174"
                  fontFamily="inter"
                >
                  8
                </Text>

                <Text
                  fontSize={{ base: '2xl', sm: '3xl', md: '3rem' }}  // ⬅️ Aumentado no mobile
                  fontWeight="bold"
                  color="#19C174"
                  ml={{ base: 0, md: '-0.5rem' }}
                  fontFamily="inter"
                  alignSelf="flex-end"
                  pb={{ base: '10px', sm: '14px', md: '18px' }}
                  lineHeight="1"
                >
                  ,30
                </Text>
              </HStack>


                <Box
                  w="full"
                  display="flex"
                  flexDirection="column"
                  alignItems={{ base: 'center', md: 'flex-start' }} // centraliza no mobile
                  textAlign={{ base: 'center', md: 'left' }}       // centraliza o texto no mobile
                >
                <Text
                  fontSize={{ base: 'sm', md: 'lg' }}
                  alignItems={{ base: 'center', md: 'flex-start' }}
                  color="#31373D"
                  fontFamily="montserrat"
                  justifyItems={{ base: 'center', md: 'flex-start' }}

                >
                  Ou R$ 100,00 à vista, preço único.
                </Text>
                <Text
                  fontSize={{ base: 'sm', md: 'lg' }}
                  fontWeight="extrabold"
                  color="#31373D"
                  fontFamily="montserrat"
                >
                  Sem surpresas.
                </Text>
              </Box>
            </VStack>

            {/* Coluna direita: benefícios */}
            <Stack spacing={5} pt={{ base: 2, md: 0 }} fontFamily="montserrat">
              {[
                'Professor qualificado com experiência prática',
                'Curso completo disponível logo após a compra',
                'Planilhas disponíveis para alunos',
                'Comunidade ativa para dúvidas e networking',
              ].map((t, i) => (
                <HStack key={i} align="start" spacing={3}>
                  <Icon as={CheckIcon} color="#19C174" mt="6px" />
                  <Text
                    color="#31373D"
                    fontWeight="semibold"
                    fontFamily="montserrat"
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    {t}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </SimpleGrid>

          <Divider my={{ base: 6, md: 8 }} opacity={0.2} />

          {/* Botão central — responsivo */}
          <Stack align="center">
            <Button
              aria-label="Comprar agora"
              color="white"
              bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
              _hover={{ bg: 'green.700' }}
              w={{ base: '100%', sm: 'auto' }}
              maxW={{ base: '100%', sm: 'unset' }}
              px={{ base: 6, sm: 10, md: 16, lg: 24 }} // antes era '8rem'
              py={{ base: 4, md: 6 }}                  // antes era '2rem'
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
              fontWeight="bold"
              fontFamily="inter"
              borderRadius="2xl"
              boxShadow="lg"
              as="a"
              href="https://hotmart.com/pt-br/marketplace/produtos/excel-360-do-zero-a-produtividade-profissional/A102209262W"  
              target="_blank"                                    
              rel="noopener noreferrer"                          
            >
              COMPRAR AGORA
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
