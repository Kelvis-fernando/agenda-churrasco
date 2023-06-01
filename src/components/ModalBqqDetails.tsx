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
import { ModalBqqDetailsProps } from '../types/ModalBqqDetailsProps';
import { format } from 'date-fns';

const ModalBqqDetails = ({
  barbecue,
  isOpenModal,
  onCloseModal,
}: ModalBqqDetailsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Text>15</Text>
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
            <Flex
              mt="5"
              pb="1"
              borderBottom="1px solid #FFD836"
              justifyContent="space-between"
            >
              <Radio
                display="flex"
                flexDirection="row"
                borderColor="#998220"
                _checked={{
                  bg: '#FFD836',
                  border: 'none',
                }}
              >
                Alice
              </Radio>
              <Text>R$ 120</Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="#FFD836"
              _hover={{ bgColor: 'rgba(255, 216, 54, 0.8)' }}
              fontWeight="bold"
              onClick={onOpen}
            >
              Participar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <JoinTheBbq children="" isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ModalBqqDetails;
