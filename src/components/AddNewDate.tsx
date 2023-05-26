import { Card, Heading, Image } from '@chakra-ui/react';
import bbqIcon from '../assets/icon_bbq.svg';

const AddNewDate = () => {
  return (
    <Card
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
    </Card>
  );
};

export default AddNewDate;
