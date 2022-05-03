import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    brand: {
      100: '#FF8295',
      // ...
      900: '#1a202c',
    },
  },
});
