import { useToast } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormEvent } from 'react';
import { auth } from '../../firebase';
import { getFormData } from '../../utils/getFormData';

const useRegister = () => {
  const toast = useToast();
  const handleSubmitRegister = async (event: FormEvent) => {
    const userData = await getFormData(event);
    createUserWithEmailAndPassword(
      auth,
      userData.email.toString(),
      userData.password.toString()
    )
      .then(() => {
        toast({
          title: 'Cadastro feito com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Erro ao fazer o cadastro!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return { handleSubmitRegister };
};

export default useRegister;
