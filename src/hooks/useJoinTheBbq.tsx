import { get, ref, update } from 'firebase/database';
import { FormEvent } from 'react';
import { db } from '../firebase';
import { getFormData } from '../utils/getFormData';
import { useToast } from '@chakra-ui/react';

const useJoinTheBbq = (id: string) => {
  const toast = useToast();

  const addParticipantToBarbecue = async (event: FormEvent) => {
    const data = await getFormData(event);
    const snapshot = await get(ref(db, `/${id}`));
    const existingData = snapshot.val();

    if (
      existingData &&
      existingData.newBbq &&
      existingData.newBbq.participants
    ) {
      const updatedParticipants = [
        ...existingData.newBbq.participants,
        { name: data.name, value: data.value },
      ];

      const updatedData = {
        ...existingData.newBbq,
        participants: updatedParticipants,
      };

      update(ref(db, `/${id}`), updatedData)
        .then((result) => {
          console.log(result);
          toast({
            title: 'Entrou no churrasco com sucesso!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: 'Erro ao entrar no churrasco, tente novamente!',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  return { addParticipantToBarbecue };
};

export default useJoinTheBbq;
