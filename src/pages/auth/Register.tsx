import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.svg';
import useRegister from '../../hooks/auth/useRegister';

const Register = () => {
  const { handleSubmitRegister } = useRegister();

  return (
    <Box
      h="85vh"
      w="100%"
      minH="30%"
      backgroundImage={`url(${background})`}
      backgroundSize="100% auto"
    >
      <form onSubmit={handleSubmitRegister}>
        <FormControl
          mt={100}
          isRequired
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="left"
        >
          <FormLabel fontWeight="bold">Nome</FormLabel>
          <Input
            type="text"
            placeholder="seunome"
            bgColor="white"
            height="50"
            w="50%"
            minW="300"
            borderRadius="sm"
            name="name"
          />
          <FormLabel fontWeight="bold">E-mail</FormLabel>
          <Input
            type="email"
            placeholder="seunome@exemplo.com"
            bgColor="white"
            height="50"
            w="50%"
            minW="300"
            borderRadius="sm"
            name="email"
          />
          <FormLabel fontWeight="bold">Senha</FormLabel>
          <Input
            type="password"
            placeholder="senha"
            bgColor="white"
            height="50"
            minW="300"
            w="50%"
            borderRadius="sm"
            name="password"
          />
          <Button
            mt="5"
            bgColor="black"
            color="white"
            minW="300"
            w="20%"
            fontWeight="bold"
            _hover={{ bgColor: 'rgba(0, 0, 0, 0.8)' }}
            type="submit"
          >
            Cadastrar
          </Button>
          <Flex
            fontWeight="bold"
            justifyContent="space-between"
            w="50%"
            minW={300}
          >
            <Link to="/login">Login</Link>
            <Link to="/forgot-password">Esqueceu a senha</Link>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default Register;
