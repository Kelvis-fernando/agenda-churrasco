import { Flex } from '@chakra-ui/react';
import BbqCard from '../components/BbqCard';
import AddNewBbq from '../components/AddNewBbq';

const Home = () => {
  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap" mt="10">
        <BbqCard />
        <BbqCard />
        <BbqCard />
        <AddNewBbq />
      </Flex>
    </>
  );
};

export default Home;
