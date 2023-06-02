import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CurrencyCircleDollar, Users } from '@phosphor-icons/react';
import JoinTheBbq from './JoinTheBqq';
import {
  ModalBqqDetailsProps,
  ParticipantsType,
} from '../types/ModalBqqDetailsProps';
import { format } from 'date-fns';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';
import { useToast } from '@chakra-ui/react';

const ModalBqqDetails = ({
  barbecue,
  isOpenModal,
  onCloseModal,
}: ModalBqqDetailsProps) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Churras</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>
                {format(new Date(barbecue.newBbq.date), 'dd/MM')}
              </Heading>
              <Flex>
                <Users size={24} color="#FFD836" />
                <Text>{barbecue.newBbq.participants.length - 1}</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="26">{barbecue.newBbq.title}</Heading>
              <Flex>
                <CurrencyCircleDollar size={24} color="#FFD836" />
                <Text>R${barbecue.newBbq.value}</Text>
              </Flex>
            </Flex>
            <Text mt="3">{barbecue.newBbq.description}</Text>
            {barbecue.newBbq.participants.map(
              (participant: ParticipantsType) => (
                <Flex
                  mt="5"
                  pb="1"
                  borderBottom="1px solid #FFD836"
                  justifyContent="space-between"
                  display={participant.name !== '' ? 'flex' : 'none'}
                >
                  <Radio
                    flexDirection="row"
                    borderColor="#998220"
                    _checked={{
                      bg: '#FFD836',
                      border: 'none',
                    }}
                  >
                    {participant.name}
                  </Radio>
                  <Text>R$ {participant.value}</Text>
                </Flex>
              )
            )}
            <Flex justifyContent="right" mt="2">
              <Text mr="3" fontWeight="semibold">
                Total
              </Text>
              <Text fontWeight="bold">
                {barbecue.newBbq.participants
                  .map((price: any) => Number(price.value))
                  .reduce((total: number, actual: number) => {
                    return total + actual;
                  }, 0)
                  .toFixed(2)}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="#FFD836"
              _hover={{ bgColor: 'rgba(255, 216, 54, 0.8)' }}
              fontWeight="bold"
              onClick={onOpen}
              mr="3"
            >
              Participar
            </Button>
            <Button
              bgColor="red.400"
              _hover={{ bgColor: 'red.300' }}
              fontWeight="bold"
              onClick={() => deleteBarbecue(barbecue.uuid)}
            >
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <JoinTheBbq isOpen={isOpen} onClose={onClose} barbecue={barbecue} />
    </>
  );
};

export default ModalBqqDetails;
