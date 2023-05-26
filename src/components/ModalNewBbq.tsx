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
  Select,
} from '@chakra-ui/react';

const ModalNewBbq = ({ isOpen, onClose }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Churras</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl
            isRequired
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <FormLabel>Titulo</FormLabel>
            <Input placeholder="Titulo" />
            <FormLabel>Descrição</FormLabel>
            <Input placeholder="Descrição" />
            <FormLabel>Valor</FormLabel>
            <Input type="number" placeholder="Valor" />
            <FormLabel>Local</FormLabel>
            <Input placeholder="Local" />
            <FormLabel>Participantes</FormLabel>
            <Select placeholder="Adicione os participantes">
              <option value="Kelvis">Kelvis</option>
              <option value="Fernando">Fernando</option>
              <option value="Stefany">Stefany</option>
            </Select>
            <FormLabel>Data:</FormLabel>
            <Input type="date" />
            <Button mt="5" bgColor="#FFD836">
              Criar
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalNewBbq;
