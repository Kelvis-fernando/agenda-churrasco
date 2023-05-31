import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.svg';

const ForgotPassword = () => {
  return (
    <Box
      h="85vh"
      w="100%"
      minH="30%"
      backgroundImage={`url(${background})`}
      backgroundSize="100% auto"
    >
      <FormControl
        mt={100}
        isRequired
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="left"
      >
        <FormLabel fontWeight="bold">E-mail</FormLabel>
        <Input
          type="email"
          placeholder="email@exemplo.com"
          bgColor="white"
          height="50"
          w="50%"
          minW="300"
          borderRadius="sm"
        />
        <Button
          mt="5"
          bgColor="black"
          color="white"
          minW="300"
          w="20%"
          fontWeight="bold"
          _hover={{ bgColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          Enviar
        </Button>
        <Flex
          fontWeight="bold"
          justifyContent="space-between"
          w="50%"
          minW={300}
        >
          <Link to="/register">Cadastre-se</Link>
          <Link to="/login">Login</Link>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default ForgotPassword;
