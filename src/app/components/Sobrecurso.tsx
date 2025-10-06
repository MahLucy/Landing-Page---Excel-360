'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  Icon,
} from '@chakra-ui/react'
import { BsClockHistory, BsPersonWorkspace, BsBook } from 'react-icons/bs'

// Componente para os cards de feature, para não repetir código
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => {
  return (
    <VStack
      bg="green.500"
      color="white"
      p={8}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
      spacing={4}
      maxW={{ base: 'full', md: '350px' }}
      w="full"
    >
      <Icon as={icon} boxSize={12} />
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text fontSize="md" px={4}>
        {text}
      </Text>
    </VStack>
  )
}

export default function Sobrecurso() {

  return (
    <Box bg="white" py={24}>
      <Container maxW="7xl">
        <VStack spacing={4} as="section" textAlign="center" mb={16}>
          <Heading as="h2" size="2xl" fontWeight="bold">
            POR QUE O{' '}
            <Text as="span" color="green.500">
              EXCEL 360?
            </Text>
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            Aprenda com aulas práticas e exercícios a criar planilhas, relatórios
            e dashboards de forma independente, impressionando chefes e
            recrutadores.
          </Text>
        </VStack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 4 }}
          justify="center"
          align="center"
        >
          <FeatureCard
            icon={BsClockHistory}
            title="+ 43 horas"
            text="de conteúdo voltado para sua produtividade"
          />

           (
            <Box color="gray.300" fontSize="2xl">
              ●
            </Box>
          )

          <FeatureCard
            icon={BsPersonWorkspace}
            title="+8 anos de experiência"
            text="o curso é criado e ensinado por quem vive de Excel todos os dias, desde o estágio até grandes projetos."
          />

           (
            <Box color="gray.300" fontSize="2xl">
              ●
            </Box>
          )

          <FeatureCard
            icon={BsBook}
            title="Acesso Vitalicio"
            text="para as primeiras turmas"
          />
        </Stack>
      </Container>
    </Box>
  )
}