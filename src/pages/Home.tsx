import { Flex, Heading, Image } from '@chakra-ui/react';
import background from '../assets/background.svg';
import BbqCard from '../components/BbqCard';
import logo from '../assets/logo.svg';
import AddNewBbq from '../components/AddNewBbq';

const Home = () => {
  return (
    <Flex
      backgroundImage={`url(${background})`}
      backgroundRepeat="no-repeat"
      backgroundSize="100% auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
    >
      <Heading textAlign="center" mt="24">
        Agenda de Churras
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" mt="10">
        <BbqCard />
        <BbqCard />
        <BbqCard />
        <AddNewBbq />
      </Flex>
      <Image src={logo} alt="Logo" boxSize="10" m="5" />
    </Flex>
  );
};

export default Home;
