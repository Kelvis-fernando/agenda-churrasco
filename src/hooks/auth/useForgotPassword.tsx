import { useToast } from '@chakra-ui/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FormEvent } from 'react';
import { auth } from '../../firebase';
import { getFormData } from '../../utils/getFormData';

const useForgotPassword = () => {
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

  return { handleSubmitForgotPassword };
};

export default useForgotPassword;
