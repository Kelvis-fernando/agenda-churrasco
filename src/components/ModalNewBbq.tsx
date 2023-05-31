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
  Select,
} from '@chakra-ui/react';
import { db } from '../firebase';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import { FormEvent } from 'react';
import { getFormData } from '../utils/getFormData';
import { useToast } from '@chakra-ui/react';
const ModalNewBbq = ({ isOpen, onClose }: ModalProps) => {
  const toast = useToast();
  const createNewBbq = async (event: FormEvent) => {
    const newBbq = await getFormData(event);
    const uuid = uid();

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
