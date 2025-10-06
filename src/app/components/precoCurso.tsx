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
//import Estrela from '../imagens/Estrela.png'



export default function PrecoCurso() {
  return (
    <Box
      pos="relative"
      py={{ base: 12, md: 20 }}
      bgImage="url('./Fundo.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
  
    >
      <Container maxW="7xl" pos="relative" >
        {/* Título / subtítulo */}
        <Stack spacing={3} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading size="lg" fontFamily={'inter'} color={'#26262A'} fontWeight={'bold'}>Preço Simplificado</Heading>
          <Text color="#70869C" maxW="3xl" mx="auto" fontWeight={'bold'} fontFamily={'montserrat'}>
            Aprenda com aulas práticas e exercícios a criar planilhas, relatórios e
            dashboards de forma independente, impressionando chefes e recrutadores.
          </Text>
        </Stack>

        {/* Card */}
        <Box
          pos="relative"
          bg="white"
          rounded="2xl"
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 10 }}
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
        top={{ base: -7, md: -8, lg: -10 }}
        left={{ base: -7, md: -8, lg: -12 }}
        w={{ base: 28, md: 36, lg: 44 }}
        h={{ base: 28, md: 36, lg: 44 }}
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
          // opcional: aumente a fonte junto
          fontSize={{ base: 'sm', md: 'xl', lg: '4xl' }}
          fontWeight="bold"
          color="white"
          fontFamily="Montserrat"
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
            alignItems={'center'}
            >
            {/* Coluna esquerda: preço */}
            <VStack align="start">
              {/* Preço antigo riscado */}
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="#70869C"
                textDecoration="line-through"
                mb={2}
                fontFamily={'montserrat'}
              >
                De R$2.000,00
              </Text>

              <HStack align="baseline" spacing={1} alignItems="flex-end">
                <Box display="flex" alignItems="flex-start" flexDirection="column" >
                  <Text fontSize="3rem" fontWeight="extrabold" fontFamily={'montserrat'} marginBottom={'-1rem'}>
                    12X
                  </Text>
                  <Text
                    fontSize="4rem"
                    fontWeight="extrabold"
                    color="#19C174"
                    mt="-1rem"
                    fontFamily={'montserrat'}
                  >
                    R$
                  </Text>
                </Box>
                <Text
                  fontSize="10rem"
                  fontWeight="extrabold"
                  lineHeight="0.9"
                  color="#19C174"
                  fontFamily={'inter'}
                >
                  8
                </Text>
                <Text
                  fontSize="3rem"
                  fontWeight="bold"
                  color="#19C174"
                  ml="-0.5rem"
                  fontFamily={'inter'}

                >
                  ,30
                </Text>
              </HStack>

              <Box>
                <Text fontSize="lg" color="#31373D" fontFamily={'montserrat'}  >
                  Ou R$ 100,00 à vista, preço único.
                </Text>
                <Text fontSize="lg" fontWeight="extrabold" color="#31373D" fontFamily={'montserrat'}>
                  Sem surpresas.
                </Text>
              </Box>
            </VStack>

            {/* Coluna direita: benefícios */}
            <Stack spacing={5} pt={{ base: 2, md: 0 }} fontFamily={'montserrat'}>
              {[
                'Professor qualificado com experiência prática',
                'Curso completo disponível logo após a compra',
                'Planilhas disponíveis para alunos',
                'Comunidade ativa para dúvidas e networking',
              ].map((t, i) => (
                <HStack key={i} align="start" spacing={3}>
                  <Icon as={CheckIcon} color="#19C174" mt="6px" />
                  <Text color="#31373D" fontWeight={'semibold'} fontFamily={'montserrat'}>{t}</Text>
                </HStack>
              ))}
            </Stack>
          </SimpleGrid>

          <Divider my={{ base: 6, md: 8 }} opacity={0.2} />

          {/* Botão central */}
          <Stack align="center">
            <Button
              color="white"
              bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
              _hover={{ bg: 'green.700' }}
              px={'8rem'}
              fontSize={'2xl'}
              fontWeight="bold"
              fontFamily={'inter'}
              padding={'2rem'}
              paddingLeft={'4rem'}
              paddingRight={'4rem'}
              borderRadius="2xl"
              boxShadow="lg"
            >
              COMPRAR AGORA
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
