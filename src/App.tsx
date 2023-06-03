import * as React from 'react';
import { ChakraProvider, Flex, theme, Image, Heading } from '@chakra-ui/react';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/auth/Login';
import background from './assets/background.svg';
import logo from './assets/logo.svg';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

export const App = () => {
  const userIsLogged = sessionStorage.getItem('userLogged');
  const valueStringget = userIsLogged && JSON.parse(userIsLogged);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        backgroundImage={`url(${background})`}
        backgroundRepeat="no-repeat"
        backgroundSize="100% auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading textAlign="center" mt="20">
          Agenda de Churras
        </Heading>
        <Router>
          <Routes>
            <Route
              path="/"
              element={valueStringget ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
        <Image
          src={logo}
          alt="Logo"
          boxSize="10"
          m="5"
          position="fixed"
          bottom="0"
        />
      </Flex>
    </ChakraProvider>
  );
};
