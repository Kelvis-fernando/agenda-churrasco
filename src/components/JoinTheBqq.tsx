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
import { JoinTheBbqProps } from '../types/JoinTheBbq';
import useJoinTheBbq from '../hooks/useJoinTheBbq';

const JoinTheBbq = ({ isOpen, onClose, barbecue }: JoinTheBbqProps) => {
  const { addParticipantToBarbecue } = useJoinTheBbq(barbecue);

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
