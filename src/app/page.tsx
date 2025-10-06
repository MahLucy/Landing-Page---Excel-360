'use client'

import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react'

import './globals.css'
import { TrailerSection } from './components/trailerSection'
import ModulosCurso from './components/ModulosCurso'
import PrecoCurso  from './components/precoCurso'
import SobreMentor  from './components/SobreMentor'
import FAQ from './components/FAQ'
import Rodape from './components/Rodape'
import PorqueExcel from './components/PorqueExcel'
import { ScrollFadeIn } from './components/ScrollFadeIn'
import FeedBack from './components/FeedBack'
import ScrollToTopButton from './components/ScrollToTopButton'



import logo from '@/app/imagens/logo.png'
import RaulBanner from '@/app/imagens/Raul_Banner.png'

export default function Hero() {

  return (
    <Box>
      {/* Seção Hero */}
    {/* Seção Hero */}
    <Box
      bg="linear-gradient(90deg, #F1F4F9 0%, #FFFFFF 100%)"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="7xl"
        py={{ base: 12, md: 20 }}
        position="relative"
        minH={{ base: 'auto', md: '72vh' }} // garante altura para a imagem “encostar” embaixo
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={12}
        >
          <ScrollFadeIn>
          <Stack
            maxW="xl"
            pr={{ base: 0, }} 
            gap={5}
          >
           <Box w="50%" paddingBottom={'2rem'}>
          <Image
            src={logo.src}
            alt="Instrutor"
            style={{ height: 'auto', width: '100%' }}
          />
           </Box>
            <Text fontSize="lg" color="#70869C" fontWeight={'bold'} fontFamily="montserrat" paddingBottom={'2rem'}>
              Domine o Excel e transforme sua forma de trabalhar. Crie dashboards profissionais, aplique atalhos, técnicas de produtividade, e apresente dados com clareza — mesmo começando do zero. 

            </Text>

            {/* Botões */}
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Box as="a" href="#preco" style={{ textDecoration: 'none' }}>
                <Button
                size="lg"
                colorScheme="green"
                bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
                _hover={{ bg: 'green.700' }}
                fontWeight={'extrabold'}
                fontFamily="montserrat" 
              >
                Quero Dominar o Excel Agora!              
              </Button>
           </Box>

              <Box as="a" href="#curriculo" style={{ textDecoration: 'none' }}>
                <Button size="lg" variant="outline" fontWeight={'bold'} fontFamily="montserrat">
                  GRADE CURRICULAR
                </Button>
              </Box>
            </Stack>

            <Text fontSize="sm" color="#696969" fontWeight={'bold'} fontFamily="montserrat">
              Garantia Satisfação Hotmart de 7 Dias e acesso vitalício.
            </Text>
          </Stack>
          </ScrollFadeIn>
        </Flex>

        {/* Imagem à direita (absoluta e “encostada” embaixo) */}

        <Box
          pos="absolute"
          right={{ base: 0, md: 4 }}
          bottom="0"
          w={{ base: '40%', md: '40%' }}   // controla o tamanho responsivo
          maxW="900px"
          pointerEvents="none"    
           display={{ base: "none", md: "block" }}          // evita clique nela
        >
          <Image
            src={RaulBanner.src}
            alt="Instrutor"
            w="100%"
            h="auto"
            objectFit="contain"
          />
        </Box>
      </Container>
    </Box>

                  <ScrollFadeIn>

        <PorqueExcel />
        </ScrollFadeIn>
                  <ScrollFadeIn>

        <TrailerSection />
                </ScrollFadeIn>

    <ScrollFadeIn>
      <Box id="curriculo">
        <ModulosCurso />
      </Box>
    </ScrollFadeIn>

                <ScrollFadeIn>
      <Box id="preco">

      <PrecoCurso/>
            </Box>

              </ScrollFadeIn>
              <Box id="avaliacoes">
                  <FeedBack/>
              </Box>
    


                <ScrollFadeIn>

      <SobreMentor/>
              </ScrollFadeIn>

                <ScrollFadeIn>

      <FAQ/>
             </ScrollFadeIn>
      <Rodape/>
<ScrollToTopButton />
    </Box>
    )
} 