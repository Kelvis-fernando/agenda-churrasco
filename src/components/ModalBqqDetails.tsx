import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

const ModalBqqDetails = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Churras</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading>Detalhes do churras</Heading>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalBqqDetails;
