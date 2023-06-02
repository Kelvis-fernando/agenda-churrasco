import { Box } from '@chakra-ui/layout';
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import background from '../../assets/background.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import { getFormData } from '../../utils/getFormData';

const Login = () => {
  const toast = useToast();
  const handleSubmitLogin = async (event: FormEvent) => {
    const userData = await getFormData(event);

    signInWithEmailAndPassword(
      auth,
      userData.email.toString(),
      userData.password.toString()
    )
      .then(() => {
        toast({
          title: 'Login feito com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        const value = JSON.stringify(true);
        sessionStorage.setItem('userLogged', value);
      })
      .then(() => {
        const userIsLogged = sessionStorage.getItem('userLogged');
        const valueStringget = JSON.parse(userIsLogged ?? '');
        if (valueStringget) {
          setTimeout(() => {
            window.location.replace('/');
          }, 2000);
        }
      })
      .catch(() => {
        toast({
          title: 'Email ou senha incorretos.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      h="85vh"
      w="100%"
      minH="30%"
      backgroundImage={`url(${background})`}
      backgroundSize="100% auto"
    >
      <form onSubmit={(event) => handleSubmitLogin(event)}>
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
            Entrar
          </Button>
          <Flex
            fontWeight="bold"
            justifyContent="space-between"
            w="50%"
            minW={300}
          >
            <Link to="/register">Cadastre-se</Link>
            <Link to="/forgot-password">Esqueceu a senha</Link>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
