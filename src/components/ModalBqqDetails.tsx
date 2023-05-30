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
  ModalProps,
  Radio,
  Text,
} from '@chakra-ui/react';
import { CurrencyCircleDollar, Users } from '@phosphor-icons/react';

const ModalBqqDetails = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          >
            Participar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBqqDetails;
