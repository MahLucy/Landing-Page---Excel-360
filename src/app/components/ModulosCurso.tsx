'use client'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
} from '@chakra-ui/react'

type Item = { value: string; title: string; bold?: string; bullets: string[] }

const items: Item[] = [
  { 
    value: 'a', 
    title: 'Introdução ao Excel', 
    bold: 'Comece do zero aprendendo os primeiros passos para se sentir seguro na utilização do Excel.',
    bullets: [
      'Entender o que são células, linhas e colunas e como se organizam em uma planilha.',
      'Navegar entre células e usar atalhos para ganhar velocidade.',
      'Inserir, editar e desfazer ações com atalhos práticos.',
      'Personalizar a barra de ferramentas para ter os recursos mais usados sempre à mão.',
      'Alterar a aparência, como mudar tema e cores do Excel.',
      'Criar, renomear, ocultar e gerenciar diferentes planilhas dentro do mesmo arquivo.',
      'Conhecer a faixa de opções e entender para que serve cada aba.',
      'Formatar textos, cores, bordas e alinhamentos para deixar suas planilhas mais organizadas.',
      'Proteger uma planilha com senha e controlar o acesso aos dados.',
    ]
  },
  { 
    value: 'b', 
    title: 'Fórmulas no Excel', 
    bold: 'Entenda como funcionam as fórmulas, a base para criar planilhas inteligentes e automatizadas.',
    bullets: [
      'Entender a estrutura de uma fórmula, incluindo como funcionam os argumentos.',
      'Utilizar fórmulas simples que não precisam de argumentos, como HOJE e AGORA.',
      'Inserir fórmulas de forma guiada com a barra de fórmulas e o botão Fx.',
      'Copiar e aplicar fórmulas para várias linhas sem retrabalho.',
      'Usar a tecla F4 para fixar células e entender a diferença entre referências absolutas, relativas e mistas.',
      'Identificar e corrigir erros comuns como #NOME?, #VALOR!, #DIV/0!, #REF! e #N/D.',
      'Auditar fórmulas para entender como elas funcionam e encontrar erros rapidamente.'
    ]
  },
  { 
    value: 'c', 
    title: 'Dicas Básicas para Mais Eficiência', 
    bold: 'Truques simples para trabalhar de forma mais rápida e organizada.',
    bullets: [
        'Entender as diferenças na hora de colar dados, como colar apenas valores, fórmulas ou formatações.',
        'Acessar menus rapidamente usando a tecla Alt, economizando tempo ao navegar por funções e painéis.',
        'Usar Buscar e Substituir para localizar informações e corrigir dados em segundos.',
        'Navegar rapidamente por tabelas com atalhos como Ctrl + E e outros que aceleram o trabalho.',
    ]
  },
    { 
    value: 'd', 
    title: 'Fórmulas Básicas de Matemática', 
    bold: 'Aprenda as principais operações matemáticas para começar a criar cálculos em suas planilhas.',
    bullets: [
      'Fazer cálculos básicos de soma, subtração, multiplicação e divisão.',
      'Trabalhar com parênteses para organizar a ordem das operações.',
      'Utilizar fórmulas essenciais como SOMA, MÉDIA, MÍNIMO e MÁXIMO.',
      'Gerar números aleatórios para simulações (ALEATÓRIO, ALEATÓRIOENTRE).',
      'Tratar erros em cálculos usando SEERRO para evitar mensagens confusas.',
    ]
  },
    { 
    value: 'e', 
    title: 'Fórmulas para Trabalhar com Texto', 
    bold: 'Organize e transforme informações textuais para deixar suas planilhas mais claras e inteligentes.',
    bullets: [
      'Juntar textos de diferentes células em uma só (CONCAT, &).',
      'Ajustar a formatação de textos, deixando tudo em maiúsculas, minúsculas ou apenas a primeira letra maiúscula.',
      'Separar partes de um texto, como extrair apenas o primeiro nome ou o domínio de um e-mail (ESQUERDA, DIREITA, EXT.TEXTO).',
      'Localizar posições específicas dentro de um texto (LOCALIZAR).',
      'Substituir automaticamente palavras ou caracteres sem editar manualmente (SUBSTITUIR).',
      'Identificar se uma informação está presente em um texto, facilitando análises.'
    ]
  },
  { 
    value: 'f', 
    title: 'Fórmulas de Data', 
    bold: 'Trabalhe com datas para calcular prazos, criar cronogramas e organizar informações.',
    bullets: [
      'Ajustar e reconhecer formatos corretos para datas.',
      'Preencher automaticamente sequências de datas.',
      'Utilizar fórmulas que mostram a data ou hora atual (HOJE, AGORA).',
      'Extrair partes de uma data, como dia, mês ou ano (DIA, MÊS, ANO).',
      'Calcular diferenças entre datas, como prazos e vencimentos (DIAS, DATADIF).',
      'Descobrir o último dia de qualquer mês (FIM.MÊS).',
      'Criar planilhas de controle financeiro e planejamento usando datas automáticas.'
    ]
  },
  { 
    value: 'g', 
    title: 'Fórmulas Avançadas de Cálculo',
    bold: 'Eleve o nível dos seus cálculos com fórmulas que trazem mais precisão e automação.', 
    bullets: [
      'Remover duplicatas e organizar dados do maior para o menor.',
      'Contar valores com várias condições (CONT.SES).',
      'Somar com base em condições específicas (SOMASES).',
      'Calcular médias personalizadas usando critérios (MÉDIASES).',
      'Combinar essas três fórmulas em análises completas.'
    ]
  },
  { 
    value: 'h', 
    title: 'Fórmulas de Procura e Referência', 
    bold: 'Localize informações e crie conexões entre diferentes tabelas.',
    bullets: [
      'Procurar dados de forma simples e avançada (PROCV, PROCX, PROCH).',
      'Entender como funcionam fórmulas como ÍNDICE e CORRESP.',
      'Combinar ÍNDICE + CORRESP para buscas mais eficientes.',
      'Trabalhar com valores duplicados e evitar erros em buscas.',
      'Usar o PROCV para valores exatos ou aproximados'
    ]
  },
  { 
    value: 'i', 
    title: 'Operadores Lógicos', 
    bold: 'Crie condições inteligentes para tomar decisões automáticas nas suas planilhas.',
    bullets: [
      'Entender operadores lógicos como >, <, =, <>, E e OU.',
      'Identificar células vazias ou nulas com fórmulas (ISNULL, ÉCÉL.VAZIA).',
      'Criar condições simples com SE.',
      'Trabalhar com várias condições ao mesmo tempo usando SES.',
      'Combinar SES com E e OU para resultados avançados.'
          ]
  },
  { 
    value: 'j', 
    title: 'Matrizes Dinâmicas', 
    bold: 'Acelere seu trabalho com fórmulas modernas que se adaptam automaticamente aos dados.',
    bullets: [
      'Entender o conceito de zona de derramamento (Spill Range).',
      'Ajustar o tamanho da zona de dados de forma dinâmica.',
      'Organizar dados com CLASSIFICAR e CLASSIFICARPOR.',
      'Filtrar informações automaticamente com FILTRO.',
      'Encontrar valores únicos em uma lista com ÚNICO.',
      'Criar combinações de classificar, filtrar e buscar valores únicos.',
      'Gerar sequências e transpor tabelas automaticamente.',
      'Aplicar formatação condicional em zonas dinâmicas.'
    ]
  },
  { 
    value: 'k', 
    title: 'Gráficos', 
    bold: 'Transforme seus dados em visuais claros e fáceis de interpretar.',
    bullets: [
      'Escolher o tipo ideal de gráfico para cada situação.',
      'Criar e personalizar gráficos do zero.',
      'Formatar cores, títulos e legendas para melhor visualização.',
      'Trabalhar com gráficos de barra, linha, pizza, rosca e mais.',
      'Criar gráficos avançados, como waterfall e combo.',
      'Salvar gráficos como modelos para reutilizar depois.'

    ]
  },
    { 
    value: 'l', 
    title: 'Criação de Tabelas', 
    bold: 'Organize seus dados em tabelas para facilitar a gestão e análise.',
    bullets: [
'Criar tabelas que se ajustam automaticamente quando novos dados são adicionados.',
'Usar nomes estruturados em fórmulas para facilitar a leitura.',
'Aplicar estilos prontos e filtros automáticos.',
'Integrar tabelas com ferramentas como Power Query e Power Pivot.',
'Usar Slicers para filtrar dados de forma rápida e visual.'
    ]
  },
    { 
    value: 'm', 
    title: 'Tabelas Dinâmicas', 
    bold: 'Analise grandes volumes de dados de maneira simples e rápida.',
    bullets: [
      'Criar tabelas dinâmicas para resumir e analisar informações.',
      'Entender como funcionam filtros, colunas, linhas e valores.',
      'Atualizar e expandir tabelas de forma automática.',
      'Agrupar dados, classificar e filtrar para uma análise mais precisa.',
      'Criar gráficos dinâmicos integrados à tabela.',
      'Adicionar Slicers e Timelines para filtros avançados.'
    ]
  },
    { 
    value: 'n', 
    title: 'Criando um Dashboard Completo', 
    bold: 'Coloque todo o conhecimento em prática criando um dashboard do zero.',
    bullets: [
        'Entender os dados antes de iniciar a construção.',
        'Criar KPIs para acompanhar os principais resultados.',
        'Organizar a estrutura visual do dashboard.',
        'Integrar gráficos, tabelas e filtros em um só lugar.',
        'Criar um painel lateral para navegação entre diferentes páginas.',
        'Finalizar o layout com um design limpo e profissional.'
    ] 
  }
]

export default function ModulosCurso() {
  return (
    <Box py={{ base: 12, md: 16 }}>
      <Container maxW="7xl">
        <Stack spacing={3} textAlign="center" mb={{ base: 8, md: 10 }} alignItems={'center'}>
          <Heading as="h3" size="lg" color={'#363636'} fontFamily={'inter'} fontWeight={'bold'}>Estrutura e conteúdos do curso</Heading>
          <Text color="#70869C" fontFamily={'montserrat'} fontWeight={'bold'}  maxW={'50rem'} >Aprenda com aulas práticas e exercícios a criar planilhas, relatórios e dashboards de forma independente, impressionando chefes e recrutadores.</Text>
        </Stack>

        <Accordion defaultIndex={[0]} allowToggle>
          {items.map((item) => (
            <AccordionItem key={item.value} mb={4} border="none">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    px={4}
                    py={4}
                    borderWidth="1px"
                    borderColor="gray.200"
                    roundedTop="xl"
                    roundedBottom={isExpanded ? 'none' : 'xl'}
                    _hover={{ bg: 'gray.50' }}
                    _expanded={{
                      color: 'white',
                      bgGradient: 'linear(to-r, #218F60, #28B779, #1F8C5E)',
                      borderColor: 'transparent',
                      boxShadow: 'md',
                    }}
                  >
                    <Box flex="1" textAlign="left" fontWeight="bold" fontFamily="inter">
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel p={0}>
                    {/* Painel colado no cabeçalho: bordas laterais + inferior e canto inferior arredondado */}
                    <Box
                      px={6}
                      py={5}
                      borderLeft="1px solid"
                      borderRight="1px solid"
                      borderBottom="1px solid"
                      borderColor="#31373D"
                      roundedBottom="xl"
                      bg="white"           
                    >
                      {item.bold && (
                        <Text
                          as="p"
                          fontWeight="bold"
                          color="#31373D"
                          mb={4}
                          fontFamily="montserrat"
                        >
                          {item.bold}
                        </Text>
                      )}

                      <List
                        styleType="disc"
                        listStylePosition="outside"
                        spacing={2}
                        color="#31373D"
                        pl={4}
                        fontFamily="montserrat"
                        fontWeight="normal"
                      >
                        {item.bullets.map((b, i) => (
                          <ListItem key={i}>{b}</ListItem>
                        ))}
                      </List>
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        <Box
        mt={4}
        px={6}
        py={4}
        textAlign="center"
        fontWeight="bold"
        color="white"
        bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
        rounded="md"
        fontFamily="inter"
      >
        Certificado de Conclusão do Curso
      </Box>
        </Container>
    </Box>
  )
}