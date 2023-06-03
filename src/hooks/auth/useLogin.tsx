import { useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { auth } from '../../firebase';
import { getFormData } from '../../utils/getFormData';

const useLogin = () => {
  const toast = useToast();
  const [isLoaing, setIsloading] = useState<boolean>(false);

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
        setIsloading(true);
        const userIsLogged = sessionStorage.getItem('userLogged');
        const valueStringget = JSON.parse(userIsLogged ?? '');
        if (valueStringget) {
          setTimeout(() => {
            setIsloading(false);
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

  return { handleSubmitLogin, isLoaing };
};

export default useLogin;
