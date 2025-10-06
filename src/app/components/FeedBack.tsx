'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Avatar,
  IconButton,
  useBreakpointValue,
  useToken,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect, useMemo, useRef, useState } from 'react'

type Comment = {
  id: string
  author: string
  handle?: string
  avatar?: string
  text: string
  age?: string
  replies?: number
  likes?: number
}

const COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Maria Luiza',
    text: '“Muito Top!! Obrigada por ensinar”',
    replies: 1,
    likes: 3,
  },
  {
    id: '2',
    author: 'João Pedro',
    text: '“Nem sabia que o Excel fazia isso... Muito bom!”',
    replies: 2,
    likes: 5,
  },
  {
    id: '3',
    author: 'Matheus',
    text: '“Estou fazendo todas as suas aulas.. Muito obrigado..”',
    replies: 0,
    likes: 2,
  },
  {
    id: '4',
    author: 'Marcos',
    text: '“Ótimo vídeo, foi melhor que gpt, copilot, e deepseek”',
  },
  {
    id: '5',
    author: 'Ana Clara',
    text: '“Obrigada por compartilhar o conhecimento”',
  },
    {
    id: '6',
    author: 'Paulo',
    text: '“Obrigado me ajudou bastante, primeira planilha feita, ficou perfeito!”',
  },
    {
    id: '7',
    author: 'Carlos',
    text: '“Obrigada queria aprender faz tempo essa planilha”',
  },
    {
    id: '8',
    author: 'Aline',
    text: '“Obrigado por compartilhar o conhecimento”',
  },
    {
    id: '10',
    author: 'Lucas',
    text: '“Sensacional... Curti muito. Parabéns”',
  },
    {
    id: '11',
    author: 'Ana Clara',
    text: '“Obrigado por compartilhar o conhecimento”',
  },
    {
    id: '12',
    author: 'Bruno',
    text: '“Top demais”',
  },
    {
    id: '13',
    author: 'Daniele',
    text: '“Muito bom o seu vídeo, obrigada.”',
  },
    {
    id: '14',
    author: 'Roberto',
    text: '“Agradecido. Vou experimentar”',
  },
      {
    id: '15',
    author: 'Gustavo',
    text: '“Faz tempo que procuro essa função, obrigado!”',
  },
      {
    id: '16',
    author: 'Paula',
    text: '“Muito boa!!”',
  },
   {
    id: '17',
    author: 'Paula',
    text: '“Show!!!”',
  },
]

function CommentCard({ c }: { c: Comment }) {
  return (
    <Box
      bg="white" 
      rounded="lg" 
      boxShadow="lg" 
      border="1px solid" 
      borderColor="blackAlpha.100" 
      p={4}
      marginBottom={4}
      minH="8rem"          // 🔹 altura mínima para padronizar
      display="flex"        // 🔹 força alinhamento
      flexDirection="column"
      justifyContent="center" // 🔹 centraliza verticalmente
    >
      <HStack align="start" spacing={2}>
        <Avatar name={c.author} src={c.avatar} size="sm" color="white" bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"/>
        <VStack align="start" spacing={1} w="full">
          <HStack spacing={2} color="#218F60" fontWeight="semibold" fontFamily="montserrat" >
            <Text>{c.author}</Text>
            {c.handle && (
              <Text as="span" color="#70869C" fontWeight="normal" fontFamily="montserrat">
                {c.handle}
              </Text>
            )}
            {c.age && (
              <Text as="span" color="#afb8c2ff" fontWeight="normal" fontFamily="montserrat">
                · {c.age}
              </Text>
            )}
          </HStack>
          <Text color="#26262A">{c.text}</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default function Feedback() {
  // quantos cards por tela
  const perView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1
  const [index, setIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const slidePct = useMemo(() => 100 / perView, [perView])
  const maxIndex = Math.max(0, COMMENTS.length - perView)
  const [green600] = useToken('colors', ['#19C174'])

// autoplay (pausa no hover)
useEffect(() => {
  if (isHover) return
  if (intervalRef.current) {
    window.clearInterval(intervalRef.current)
  }
  intervalRef.current = window.setInterval(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, 3500)
  return () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
    }
  }
}, [isHover, maxIndex])


  const goto = (i: number) => setIndex(Math.min(Math.max(i, 0), maxIndex))
  const prev = () => goto(index <= 0 ? maxIndex : index - 1)
  const next = () => goto(index >= maxIndex ? 0 : index + 1)

  return (
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <VStack spacing={2} textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading size="lg" color="#26262A" fontFamily={'inter'} fontWeight={'bold'}>
            Mais de 35mil pessoas aprendem todo os dias
          </Heading>
          <Text color="#70869C" fontWeight="bold" fontFamily={'montserrat'} >
            Alguns feedbacks de nossos seguidores
          </Text>
        </VStack>

        <Box
          pos="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* controles */}
          <IconButton
            aria-label="Anterior"
            icon={<ChevronLeftIcon boxSize={6} />}
            onClick={prev}
            variant="ghost"
            pos="absolute"
            left={-2}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            marginLeft={'-4rem'}
            color={'#19C174'}

          />
          <IconButton
            aria-label="Próximo"
            icon={<ChevronRightIcon boxSize={6} />}
            onClick={next}
            variant="ghost"
            pos="absolute"
            right={-2}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            marginRight={'-4rem'}
            color={'#19C174'}

          />

          {/* viewport */}
          <Box overflow="hidden">
            {/* trilho */}
            <HStack
              spacing={4}
              w="full"
              // move em porcentagem de acordo com cards por view
              transform={`translateX(-${index * slidePct}%)`}
              transition="transform 500ms ease"
            >
              {COMMENTS.map((c) => (
                <Box key={c.id} minW={`${slidePct}%`}>
                  <CommentCard c={c} />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* bolinhas de navegação */}
          <HStack justify="center" mt={4} spacing={2}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <Box
                as="button"
                key={i}
                onClick={() => goto(i)}
                w={2.5}
                h={2.5}
                rounded="full"
                bg={i === index ? green600 : 'gray.300'}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </HStack>
        <Text
          fontSize="sm"
          color="gray.500"
          textAlign="center"
          mt={6}
          fontFamily="montserrat"
          fontWeight={'bold'}
        >
          Esses comentários foram retirados das redes sociais de Raul Siqueira, 
          sobre conteúdos gratuitos já publicados sobre sua experiência com o Excel!
        </Text>
        </Box>
      </Container>
    </Box>
  )
}
