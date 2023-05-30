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

const JoinTheBbq = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Participar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl
            isRequired
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Seu nome" />
            <FormLabel>Valor</FormLabel>
            <Input placeholder="R$" type="number" />
            <Button
              mt="5"
              bgColor="#FFD836"
              fontWeight="bold"
              _hover={{ bgColor: 'rgba(255, 216, 54, 0.8)' }}
            >
              Salvar
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default JoinTheBbq;
