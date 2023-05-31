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
import { sendPasswordResetEmail } from 'firebase/auth';
import { useToast } from '@chakra-ui/react';
import { FormEvent } from 'react';
import { auth } from '../../firebase';
import { getFormData } from '../../utils/getFormData';

const ForgotPassword = () => {
  const toast = useToast();
  const handleSubmitForgotPassword = async (event: FormEvent) => {
    const userData = await getFormData(event);

    sendPasswordResetEmail(auth, userData.email.toString())
      .then(() => {
        toast({
          title: 'Email enviado com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Erro ao enviar o email!.',
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
      <form onSubmit={handleSubmitForgotPassword}>
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
            name="email"
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
      </form>
    </Box>
  );
};

export default ForgotPassword;
