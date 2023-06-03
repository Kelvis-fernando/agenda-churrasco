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
  ModalProps,
} from '@chakra-ui/react';
import useModalNewBbq from '../hooks/useModalNewBbq';

const ModalNewBbq = ({ isOpen, onClose }: ModalProps) => {
  const { createNewBbq } = useModalNewBbq();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Churras</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={createNewBbq}>
            <FormControl
              isRequired
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <FormLabel>Titulo</FormLabel>
              <Input placeholder="Titulo" name="title" />
              <FormLabel>Descrição</FormLabel>
              <Input placeholder="Descrição" name="description" />
              <FormLabel>Valor</FormLabel>
              <Input type="number" placeholder="Valor" name="value" />
              <FormLabel>Data:</FormLabel>
              <Input type="date" name="date" />
              <Button
                mt="5"
                bgColor="#FFD836"
                fontWeight="bold"
                _hover={{ bgColor: 'rgba(255, 216, 54, 0.8)' }}
                type="submit"
              >
                Criar
              </Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalNewBbq;
