'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Grid,
  GridItem
} from '@chakra-ui/react'

type Item = {
  title: string
  body: React.ReactNode
  image?: string // caminho relativo dentro de /public (opcional)
}


const ITEMS: Item[] = [
  {
    title: 'VOCÊ APRENDE FAZENDO',
    body:(
    <>
          Nada de teoria sem prática! Cada módulo traz <b>exercícios, quizzes e planilhas para baixar</b>, com exemplos reais de trabalho. Assim, você aprende resolvendo problemas do dia a dia.
    </>
    ),
    image: '/imagens/Aprendendo.png'
  },
  {
    title: 'FOCO TOTAL EM PRODUTIVIDADE',
    body:(
    <>
     Além de aprender as funções do Excel, você vai descobrir <b>atalhos, técnicas de produtividade</b> que transformam horas de trabalho em minutos.
    </>
    ),
    image: '/imagens/Foco.png',
  },
  {
    title: 'CONTEÚDO COMPLETO: DO BÁSICO AO AVANÇADO',
    body:(
    <>
      São <b>+43 horas de aulas passo a passo</b>, ensinando do básico ao avançado, formatação, fórmulas, gráficos, dashboards e automações <b>com explicações simples e diretas.</b>
    </>
    ),
    image: '/imagens/Conteudo.png',
  },
  {
    title: 'SUPORTE E COMUNIDADE',
    body:(
    <>
    Você nunca estuda sozinho: tire dúvidas e troque experiências com outros alunos. <b>Respostas em até 48h</b> e um grupo exclusivo para a comunidade.
    </>
    ),
    image: '/imagens/Suporte.png',
  },
  {
    title: 'FEITO POR QUEM VIVE DE EXCEL',
    body:(
    <>
    Criado por <b>Raul Siqueira</b>, especialista em dados com mais de 8 anos de experiência, o curso foca no que realmente importa: <b>organização, produtividade e apresentação profissional de dados.<b/>
    </b>
    </>
    ),
    image: '/imagens/Excel.png',
  },
]

// Card reutilizável
function MetodoCard({ title, body, image }: Item) {
  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      border="1px solid"
      borderColor="blackAlpha.100"
    >
      {/* Topo com imagem + overlay verde */}
      <Box
        h={{ base: 36, md: 40 }}
        position="relative"
        // se não houver imagem, usa só o gradiente
        bgImage={image ? `url(${image})` : 'linear-gradient(to bottom, #24A871, #148C67)'}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        <Text
          textAlign="center"
          color="white"
          fontWeight="extrabold"
          fontFamily="inter"
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight="short"
        >
          {title}
        </Text>
      </Box>

      {/* Corpo do card */}
      <Box p={{ base: 4, md: 6 }} bg="white">
        <Text color="#2A2E33" fontFamily="montserrat" fontSize={{ base: 'sm', md: 'md' }} >
          {body}
        </Text>
      </Box>
    </Box>
  )
}

export default function Metodologia() {
  return (
    <Box py={{ base: 12, md: 16 }} bg="white">
      <Container maxW="7xl">
        <Stack spacing={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading size="lg" color="#363636" fontFamily="inter" fontWeight="bold">
            Metodologia de aprendizado
          </Heading>
          {/* Subtítulo opcional */}
          {/* <Text color="#70869C" fontWeight="bold" fontFamily="montserrat">
            Como você vai evoluir do zero ao avançado
          </Text> */}
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
          {ITEMS.map((it, i) => (
            <MetodoCard key={i} {...it} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
