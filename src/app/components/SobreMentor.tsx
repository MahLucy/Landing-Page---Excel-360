'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import RaulMentor from '@/app/imagens/Raul_Mentor.png'



export default function MentorSection() {
  return (
    <Box py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        {/* Títulos */}
        <Stack spacing={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading size="xl" fontFamily={'inter'} color={'#26262A'}>Conheça seu mentor</Heading>
          <Text color="#70869C" fontWeight="bold" fontFamily={'montserrat'} fontSize={'lg'}>
            Conheça o seu guia por essa jornada.
          </Text>
        </Stack>

        {/* Wrapper com a borda verde por trás */}
        <Box position="relative">
          {/* Borda grande ao fundo */}
          <Box
            position="absolute"
            inset={{ base: '50px 0 20px 0', md: '50px 0 20px 0' }}
            border="2px solid"
            borderColor="#19C174"
            borderRadius="xl"
            zIndex={0}
          />

          <Grid
            templateColumns={{ base: '1fr', md: '5fr 7fr' }}
            gap={{ base: 8, md: 12 }}
            alignItems="center"
            position="relative"
            zIndex={1} // acima da borda
          >
            {/* Coluna esquerda: imagem única (mentor + elementos) */}
            <GridItem>
              <Box
                position="relative"
                w="full"
                maxW={{ base: '80%', md: '100%' }}
                mx={{ base: 'auto', md: 0 }}
              >
                <Image
                  src={RaulMentor.src}
                  alt="Raul Siqueira"
                  width={1000}
                  height={1000}
                  style={{ height: 'auto', width: '100%' }}
                  priority
                />
              </Box>
            </GridItem>

            {/* Coluna direita: conteúdo dentro da “borda” */}
            <GridItem width={'90%'} paddingTop={'5vh'} pl={{ base: '3vh', md: '0' }}>
              <Stack spacing={8}>
                <Text fontFamily={'montserrat'} color={'#26262A'} fontWeight={'medium'} fontSize={'lg'}>
                  <Text as="span" fontWeight="bold" >
                    Raul Siqueira
                  </Text>{' '}
O curso foi criado por Raul Siqueira, especialista em dados com mais de 8 anos de experiência em empresas e projetos reais.
Ele ensina o que realmente importa:
                </Text>

                <List spacing={4}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="#19C174" />
                    <Text as="span" fontWeight="bold" fontFamily={'montserrat'} color={'#26262A'} fontSize={'lg'}>
                      Organização
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="#19C174" />
                    <Text as="span" fontWeight="bold" fontFamily={'montserrat'} color={'#26262A'} fontSize={'lg'}>
                    Produtividade
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="#19C174" />
                    <Text as="span" fontWeight="bold" fontFamily={'montserrat'} color={'#26262A'} fontSize={'lg'}>
                    Apresentação profissional de dados.
                    </Text>
                  </ListItem>
                </List>

                <Box pt={2} as="a" href="#preco" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
                    color="white"
                    borderRadius="lg"
                    w={{ base: 'full', sm: 'auto' }}
                    position="relative"
                    top={'8.5vh'}
                    paddingLeft={'5rem'}    
                    paddingRight={'5rem'}
                    fontFamily={'inter'}
                    fontWeight={'bold'}
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
