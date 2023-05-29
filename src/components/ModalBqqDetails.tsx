import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
          <Box>
            <Flex
              justifyContent="space-between"
              borderBottom="1px solid #FFD836"
              pb="1"
            >
              <Radio
                colorScheme="red"
                value="1"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                Alice
              </Radio>
              <Text>R$115</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              borderBottom="1px solid #FFD836"
              pb="1"
            >
              <Radio
                colorScheme="red"
                value="1"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                Alice
              </Radio>
              <Text>R$115</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              borderBottom="1px solid #FFD836"
              pb="1"
            >
              <Radio
                colorScheme="red"
                value="1"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                Alice
              </Radio>
              <Text>R$115</Text>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalBqqDetails;
