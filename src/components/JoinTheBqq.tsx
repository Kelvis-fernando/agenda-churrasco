import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { get, ref, update } from 'firebase/database';
import { FormEvent } from 'react';
import { db } from '../firebase';
import { getFormData } from '../utils/getFormData';
import { JoinTheBbqProps } from '../types/JoinTheBbq';

const JoinTheBbq = ({ isOpen, onClose, barbecue }: JoinTheBbqProps) => {
  const addParticipantToBarbecue = async (event: FormEvent) => {
    const data = await getFormData(event);
    const snapshot = await get(ref(db, `/${barbecue.uuid}`));
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
        ...existingData,
        newBbq: {
          ...existingData.newBbq,
          participants: updatedParticipants,
        },
      };
      update(ref(db, `/${barbecue.uuid}`), updatedData);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Participar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={addParticipantToBarbecue}>
            <FormControl
              isRequired
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Seu nome" name="name" />
              <FormLabel>Valor</FormLabel>
              <Input placeholder="R$" type="number" name="value" />
              <Button
                mt="5"
                bgColor="#FFD836"
                fontWeight="bold"
                _hover={{ bgColor: 'rgba(255, 216, 54, 0.8)' }}
                type="submit"
              >
                Salvar
              </Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default JoinTheBbq;
