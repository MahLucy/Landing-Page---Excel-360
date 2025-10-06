'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

type FaqItem = { q: string; a: string }

const faq: FaqItem[] = [
  {
    q: 'Nunca usei  Excel, será que vou entender?',
    a: 'Sim! O curso é 100% passo a passo, pensado para quem nunca abriu o Excel. Você vai aprender do básico absoluto até criar dashboards profissionais.'
  },
  {
    q: 'Por quanto tempo eu tenho acesso?',
    a: 'Acesso vitalício ao conteúdo — você pode assistir quando e quantas vezes quiser, incluindo futuras atualizações do curso.'
  },
  {
    q: 'Tem certificado ao final do curso?',
    a: 'Sim, ao concluir as aulas e atividades você emite o certificado nominal, com carga horária.'
  },
  {
    q: 'Não tenho tempo para fazer o curso agora…',
    a: 'O curso é gravado e o acesso é imediato e ilimitado — você faz no seu ritmo, pode assistir e rever as aulas quantas vezes quiser, no horário que preferir.'
  },
    {
    q: 'Será que realmente vou aprender?',
    a: 'Além das aulas, você terá exercícios práticos, planilhas para baixar, quizzes em todos os módulos e suporte para tirar dúvidas. Só não aprende quem não pratica!'
  },
    {
    q: 'Preciso de algo caro ou avançado para fazer o curso?',
    a: 'Só precisa de um computador (PC ou notebook) e Excel instalado (pode ser qualquer versão).'
  },
    {
    q: 'Como funciona o acesso e o suporte?',
    a: 'Após a compra, o acesso é imediato pela Hotmart. Suporte para dúvidas com resposta em até 48h.'
  },
      {
    q: 'E se eu não gostar do curso?',
    a: 'Você tem 7 dias de garantia incondicional. Se não gostar, é só pedir que devolvemos 100% do valor.'
  },
]

export default function FAQ() {
  return (
    <Box py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        {/* Título e subtítulo */}
        <Stack spacing={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" fontWeight="extrabold" letterSpacing="0.5px" fontFamily={'inter'} color={'#26262A'}>
            FAQ
          </Heading>
          <Text color="#70869C" fontWeight="semibold" fontFamily={'montserrat'}>
            Tudo que você precisa saber antes de começar.
          </Text>
        </Stack>

        {/* Lista FAQ */}
        <Accordion defaultIndex={[0]} allowToggle>
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              border="0"
              borderTop="1px solid"
              borderColor="#E4E4E4"
              _last={{ borderBottom: '1px solid', borderBottomColor: 'gray.200' }}
            >
              <h3>
                <AccordionButton
                  px={{ base: 2, md: 4 }}
                  py={{ base: 4, md: 5 }}
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ bg: 'transparent' }}
                  justifyContent="space-between"
                  gap={4}

                >
                  <Text
                    flex="1"
                    textAlign="left"
                    fontWeight="extrabold"
                    color="#26262A"
                    lineHeight="1.3"
                    fontFamily={'inter'}
                  >
                    {item.q}
                  </Text>
                  <AccordionIcon color="gray.600" />
                </AccordionButton>
              </h3>

              <AccordionPanel
                pt={0}
                pb={{ base: 4, md: 5 }}
                px={{ base: 2, md: 4 }}
              >
                <Text color="#26262A" fontFamily={'montserrat'} fontWeight={'light'} >
                  {item.a}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  )
}
