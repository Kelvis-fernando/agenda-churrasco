import { Flex, Heading } from '@chakra-ui/react';
import background from '../assets/background.svg';
import BbqCard from '../components/BbqCard';

const Home = () => {
  return (
    <Flex
      backgroundImage={`url(${background})`}
      backgroundRepeat="no-repeat"
      backgroundSize="100% auto"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading textAlign="center" mt="24">
        Agenda de Churras
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" mt="10">
        <BbqCard />
        <BbqCard />
        <BbqCard />
        <BbqCard />
      </Flex>
    </Flex>
  );
};

export default Home;
