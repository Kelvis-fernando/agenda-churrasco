import { Card, Heading, Flex, Box, Text } from '@chakra-ui/react';
import { Users, CurrencyCircleDollar } from '@phosphor-icons/react';

const BbqCard = () => {
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
    >
      <Box justifyContent="flex-start" w="100%">
        <Heading>01/07</Heading>
        <Text fontWeight="semibold" mt="3">
          Niver do Kelvis
        </Text>
      </Box>
      <Flex justifyContent="space-around" w="100%" mt="10">
        <Flex alignItems="center">
          <Users size={24} color="#FFD836" />
          <Text fontWeight="semibold">15</Text>
        </Flex>
        <Flex alignItems="center">
          <CurrencyCircleDollar size={24} color="#FFD836" />
          <Text fontWeight="semibold">R$180</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default BbqCard;
