import { useToast } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { FormEvent } from 'react';
import { uid } from 'uid';
import { db } from '../firebase';
import { getFormData } from '../utils/getFormData';

const useModalNewBbq = () => {
  const toast = useToast();
  const createNewBbq = async (event: FormEvent) => {
    const bbq = await getFormData(event);
    const uuid = uid();
    const newBbq = {
      title: bbq.title,
      value: bbq.value,
      description: bbq.description,
      date: bbq.date,
      participants: [{ name: '', value: 0 }],
    };

    set(ref(db, `/${uuid}`), {
      newBbq,
      uuid,
    })
      .then(() => {
        toast({
          title: 'Churras criado com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: 'Erro ao criar o churras!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return { createNewBbq };
};

export default useModalNewBbq;
