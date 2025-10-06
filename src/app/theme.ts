// src/theme.ts

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,    // Títulos usam Inter
    body: `'Montserrat', sans-serif`,  // Textos normais usam Montserrat
  },
  styles: {
    global: {
      // Estilos para o body (afeta textos normais)
      body: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '23px',
        color: '#70869C',
      },
      // Estilos específicos para elementos de texto
      p: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '23px',
        color: '#70869C',
      },
    },
  },
  components: {
    // Configuração específica para componentes Text do Chakra
    Text: {
      baseStyle: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '23px',
        color: '#70869C',
      },
    },
    // Configuração específica para componentes Heading do Chakra
    Heading: {
      baseStyle: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        color: '#363636',
        // Os tamanhos podem variar, mas a fonte e cor serão consistentes
      },
      // Você pode definir tamanhos específicos se quiser
      sizes: {
        xl: {
          fontSize: '40px', // ou o tamanho que preferir
        },
        '2xl': {
          fontSize: '28px', // ou o tamanho que preferir
        },
        // ... outros tamanhos
      },
    },
  },
});

export default theme;