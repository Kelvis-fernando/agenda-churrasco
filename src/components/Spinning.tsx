import { Flex, Spinner } from '@chakra-ui/react';

const Spinning = () => {
  return (
    <Flex
      bgColor="rgba(0, 0, 0, 0.1)"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="lg" />
    </Flex>
  );
};

export default Spinning;
