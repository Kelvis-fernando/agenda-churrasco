import { useToast } from '@chakra-ui/react';
import { remove, ref } from 'firebase/database';
import { db } from '../firebase';

const useModalBqqDetails = () => {
  const toast = useToast();
  const deleteBarbecue = async (uuid: string) => {
    await remove(ref(db, `/${uuid}`))
      .then(() => {
        toast({
          title: 'Churras deletado com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        window.location.reload();
      })
      .catch(() => {
        toast({
          title: 'Erro ao deletar',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return { deleteBarbecue };
};

export default useModalBqqDetails;
