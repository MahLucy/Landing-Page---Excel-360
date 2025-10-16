'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  Stack,
  HStack,
} from '@chakra-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'

export default function PublicoAlvo() {
  return (
    <Box py={{ base: 12, md: 16 }} bg="white">
      <Container maxW="7xl">
        {/* Título */}
        <Stack spacing={2} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading size="lg" color="#26262A" fontFamily="inter" fontWeight="bold">
            Para quem é o curso?
          </Heading>
          <Text color="#70869C" fontWeight="bold" fontFamily="montserrat">
            Entenda se o curso vale o seu tempo e dinheiro.
          </Text>
        </Stack>

        {/* Cards */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
          {/* ---- Card ESQUERDO ---- */}
          <Box
            position="relative"
            rounded="2xl"
            overflow="hidden"
            boxShadow="sm"
            bg={'#E3FAF0'}

          >
            {/* Faixa de topo com gradiente */}
            <Box
              h={{ base: 20, md: 24 }}
              bgGradient="linear(to-r, #24A871, #148C67)"
              roundedTop="2xl"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              
            {/* Selo circular (check) que invade a faixa */}
            <HStack
              w={{ base: 24, md: 28 }}
              h={{ base: 24, md: 28 }}
              rounded="full"
              justify="center"
              align="center"
            >
              <Box
              
                rounded="full"
                display="grid"
                placeItems="center"
                bg="white"
                color="green"
                boxShadow="sm"
                width={'50%'}
                h={'50%'}
              >
                <LuCheck size={28} />
              </Box>
            </HStack>
            <Text color="white" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>
                O curso é para você se...
              </Text>

           </Box>


            {/* Corpo do card */}
            <Box p={{ base: 5, md: 8 }}>
              <List
                spacing={4}
                color="#2A2E33"
                fontFamily="montserrat"
                fontSize={{ base: 'md', md: 'lg' }}
                styleType='"•  "'
                pl={4}
              >
                <ListItem>
                  Nunca abriu o Excel e quer aprender <b>do absoluto zero</b>.
                </ListItem>
                <ListItem>
                  Já usa o Excel e <b>sente que perde tempo</b> com tarefas manuais e repetitivas.
                </ListItem>
                <ListItem>
                  Quer <b>criar planilhas, gráficos e dashboards profissionais</b>.
                </ListItem>
                <ListItem>
                  Trabalha em áreas como <b>RH, vendas, marketing, contabilidade, logística ou
                  engenharia</b> e precisa de mais produtividade.
                </ListItem>
                <ListItem>
                  Deseja <b>crescer na carreira</b>, conquistar promoções ou novas vagas dominando
                  uma das ferramentas mais exigidas do mercado.
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* ---- Card DIREITO ---- */}
          <Box
            position="relative"
            rounded="2xl"
            overflow="hidden"
            boxShadow="sm"
            bg={'#FFEAEA'}
          >
            {/* Faixa de topo com gradiente */}
            <Box
              h={{ base: 20, md: 24 }}
              bgGradient="linear(to-r, #F46B6B, #E84F7A)"
              roundedTop="2xl"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pl={{ base: 16, md: 20 }}
            >
              <Text color="white" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>
                Não é pra você se...
              </Text>

            {/* Selo circular (X) */}
            <HStack
              w={{ base: 24, md: 28 }}
              h={{ base: 24, md: 28 }}
              rounded="full"
              justify="center"
              align="center"
            >
              <Box
                rounded="full"
                display="grid"
                placeItems="center"
                color="red"
                boxShadow="sm"
                width={'50%'}
                h={'50%'}
                bg={'#ffffffff'}

              >
                <LuX size={28} />
              </Box>
            </HStack>
            </Box>

            {/* Corpo do card */}
            <Box p={{ base: 5, md: 8 }}>
              <List
                spacing={4}
                color="#2A2E33"
                fontFamily="montserrat"
                fontSize={{ base: 'md', md: 'lg' }}
                styleType='"•  "'
                pl={4}
              >
                <ListItem>
                  Já tem <b>conhecimento avançado</b> (VBA, Power Query, Macros).
                </ListItem>
                <ListItem>
                  Quer um curso <b>só teórico</b>, sem colocar a mão na massa.
                </ListItem>
                <ListItem>
                  Não tem interesse em <b>ganhar tempo ou otimizar seu trabalho</b>.
                </ListItem>
                <ListItem>
                  Não possui <b>computador</b> ou <b>acesso ao Excel</b>.
                </ListItem>
              </List>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
