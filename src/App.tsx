import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Box>
      <Home />
    </Box>
  </ChakraProvider>
);
