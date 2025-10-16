'use client'
import {
  Box, Container, Flex, Heading, Text, Stack, VStack,
  useBreakpointValue, Icon,
} from '@chakra-ui/react'
import type { ElementType } from 'react'
import { BsClockHistory, BsPersonWorkspace, BsBook } from 'react-icons/bs'
import Animacao from './Animacao'
import { ScrollFadeIn } from './ScrollFadeIn'

export default function PorqueExcel() {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  interface FeatureCardProps {
    icon: ElementType
    prefix?: string
    /** Use 'value' para números animados OU 'label' para texto fixo */
    value?: number
    label?: string
    suffix?: string
    text: string
  }

  const FeatureCard = ({ icon, prefix = '', value, label, suffix = '', text }: FeatureCardProps) => {
    const isNumber = typeof value === 'number' && Number.isFinite(value)

    return (
            <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        bgGradient="linear(to-r, #1FAE76, #169D6A)"
        color="white"
        p={{ base: 8, md: 8 }}
        borderRadius="2xl"
        boxShadow="0 16px 40px rgba(0,0,0,0.12)"
        w="full"
        maxW={{ base: '100%', lg: '100rem' }}   // 🔹 largura máxima
        minW={{ base: '21rem', md: '21rem' }}   // 🔹 largura mínima
        maxH={{ base: '30rem', lg: '30rem' }}   // 🔹 altura máxima
        minH={{ base: '10rem', md: '10rem' }}   // 🔹 altura mínima
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '2xl',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
          pointerEvents: 'none',
        }}
      >
        <Icon as={icon} boxSize={12} />
        <VStack align="center" spacing={1}>
          <Heading as="h3" fontSize="2xl">
            {isNumber ? (
              <Animacao prefix={prefix} to={value!} suffix={suffix} />
            ) : (
              `${prefix}${label ?? ''}${suffix ? ` ${suffix}` : ''}`
            )}
          </Heading>
          <Text fontSize="md">{text}</Text>
        </VStack>
      </Flex>
    )
  }

  return (
    <Box bg="white" py={24}>
      <Container maxW="8xl">
        <VStack spacing={4} as="section" textAlign="center" mb={16} paddingBottom="3rem">
          <Heading as="h2" size="2xl" fontWeight="bold" color="#363636" paddingBottom="2rem">
            POR QUE O <Text as="span" color="#25A86F">EXCEL 360?</Text>
          </Heading>
          <Text fontSize="lg" color="#70869C" maxW="3xl" fontWeight="bold" fontFamily="montserrat">
            Aprenda com aulas práticas e exercícios a criar planilhas, relatórios
            e dashboards de forma independente, impressionando chefes e
            recrutadores.
          </Text>
        </VStack>

        <Stack direction={{ base: 'column', md: 'row' }} justify="center" align="center" gap="3rem" >
          <ScrollFadeIn>
            <FeatureCard
              icon={BsClockHistory}
              prefix="+ "
              value={43}
              suffix=" horas"
              text="de conteúdo voltado para sua produtividade"
            />
          </ScrollFadeIn>

          {isDesktop && <Box color="gray.300" fontSize="2xl">●</Box>}

          <ScrollFadeIn>
            <FeatureCard
              icon={BsPersonWorkspace}
              prefix="+"
              value={8}
              suffix=" anos de experiência"
              text="curso criado e ensinado por quem vive de Excel todos os dias, do estágio a grandes projetos."
            />
          </ScrollFadeIn>

          {isDesktop && <Box color="gray.300" fontSize="2xl">●</Box>}

          <ScrollFadeIn>
            <FeatureCard
              icon={BsBook}
              prefix="Acesso"
              label=" vitalício"
              text=" para as primeiras turmas"
            />
          </ScrollFadeIn>
        </Stack>
      </Container>
    </Box>
  )
}
