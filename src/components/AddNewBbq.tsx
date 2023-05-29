import { Card, Heading, Image, useDisclosure } from '@chakra-ui/react';
import bbqIcon from '../assets/icon_bbq.svg';
import ModalNewBbq from './ModalNewBbq';

const AddNewBbq = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      onClick={onOpen}
      p="10"
      m="3"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      borderRadius="sm"
      boxShadow="lg"
      width=" 282px"
      height=" 192px"
      bgColor="#F1F1F1"
    >
      <Image src={bbqIcon} bgColor="#FFD836" p="4" borderRadius="full" />
      <Heading as="h2" fontSize="24">
        Adicionar Churras
      </Heading>
      <ModalNewBbq onClose={onClose} isOpen={isOpen} children="" />
    </Card>
  );
};

export default AddNewBbq;
