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
import PrecoCurso from './components/precoCurso'
import SobreMentor from './components/SobreMentor'
import FAQ from './components/FAQ'
import Rodape from './components/Rodape'
import PorqueExcel from './components/PorqueExcel'
import { ScrollFadeIn } from './components/ScrollFadeIn'
import FeedBack from './components/FeedBack'
import ScrollToTopButton from './components/ScrollToTopButton'

import logo from '@/app/imagens/logo.png'
import PublicoAlvo from './components/PublicoAlvo'
import Metodologia from './components/Metodologia'

export default function Hero() {
  return (
    <Box>
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
          minH={{ base: 'auto', md: '72vh' }}
        >
          {/* Container principal */}
          <Flex
            direction={{ base: 'column', md: 'row' }}     // coluna no mobile
            align={{ base: 'center', md: 'center' }}       // centra no mobile
            justify={{ base: 'center', md: 'space-between' }}
            gap={{ base: 8, md: 12 }}
          >
            {/* Lado esquerdo - Texto */}
            <ScrollFadeIn>
              <Stack
                maxW={{ base: 'full', md: 'xl' }}
                pr={{ base: 0, md: 8 }}
                gap={5}
                align={{ base: 'center', md: 'flex-start' }}     // centra conteúdo no mobile
                textAlign={{ base: 'center', md: 'left' }}       // textos centralizados no mobile
              >
                <Box w={{ base: '70%', sm: '60%', md: '50%' }} pb="2rem" mx={{ base: 'auto', md: 0 }}>
                  <Image
                    src={logo.src}
                    alt="Instrutor"
                    style={{ height: 'auto', width: '100%' }}
                  />
                </Box>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="#70869C"
                  fontWeight="bold"
                  fontFamily="montserrat"
                  pb="2rem"
                >
                  Domine o Excel e transforme sua forma de trabalhar. Crie dashboards profissionais,
                  aplique atalhos, técnicas de produtividade e apresente dados com clareza — mesmo começando do zero.
                </Text>

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  w="full"
                  justify={{ base: 'center', sm: 'flex-start' }}
                >
                  <Box as="a" href="#preco" style={{ textDecoration: 'none' }} className="no-underline" >
                    <Button
                      size={{ base: 'md', md: 'lg' }}
                      w={{ base: 'full', sm: 'auto' }}                 // botão full no mobile
                      colorScheme="green"
                      bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
                      _hover={{ bg: 'green.700' }}
                      fontWeight="extrabold"
                      fontFamily="montserrat"
                    >
                      Quero Dominar o Excel Agora!
                    </Button>
                  </Box>

                  <Box as="a" href="#curriculo" style={{ textDecoration: 'none' }}>
                    <Button
                      size={{ base: 'md', md: 'lg' }}
                      w={{ base: 'full', sm: 'auto' }}                 // botão full no mobile
                      variant="outline"
                      fontWeight="bold"
                      fontFamily="montserrat"
                    >
                      GRADE CURRICULAR
                    </Button>
                  </Box>
                </Stack>

                <Text
                  fontSize={{ base: 'xs', md: 'sm' }}
                  color="#696969"
                  fontWeight="bold"
                  fontFamily="montserrat"
                >
                  Garantia Satisfação Hotmart de 7 Dias e acesso vitalício.
                </Text>
              </Stack>
            </ScrollFadeIn>

            {/* Lado direito - Vídeo */}
            <ScrollFadeIn>
              <Box
                w="full"
                maxW={{ base: '700px', md: '600px' }}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                mx={{ base: 'auto', md: 0 }}               // centraliza o vídeo no mobile
              >
                <video
                  controls
                  autoPlay
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                >
                  <source src="/video/Excel360.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </Box>
            </ScrollFadeIn>
          </Flex>
        </Container>
      </Box>

      <ScrollFadeIn>
        <PorqueExcel />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Metodologia />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Box id="curriculo">
          <ModulosCurso />
        </Box>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Box id="preco">
          <PrecoCurso />
        </Box>
      </ScrollFadeIn>

      <Box id="avaliacoes">
        <FeedBack />
      </Box>

      <ScrollFadeIn>
        <PublicoAlvo />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <SobreMentor />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <FAQ />
      </ScrollFadeIn>

      <Rodape />
      <ScrollToTopButton />
    </Box>
  )
}
