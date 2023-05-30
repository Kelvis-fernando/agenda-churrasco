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

const ModalBqqDetails = ({
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
              <Heading>01/12</Heading>
              <Flex>
                <Users size={24} color="#FFD836" />
                <Text>15</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>Níver do Gui</Heading>
              <Flex>
                <CurrencyCircleDollar size={24} color="#FFD836" />
                <Text>R$280</Text>
              </Flex>
            </Flex>
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
