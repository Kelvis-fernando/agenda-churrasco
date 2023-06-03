import { Flex } from '@chakra-ui/react';
import BbqCard from '../components/BbqCard';
import AddNewBbq from '../components/AddNewBbq';
import useHome from '../hooks/useHome';

const Home = () => {
  const { barbecues } = useHome();

  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap" mt="10">
        {barbecues &&
          barbecues.map((barbecue, index: number) => (
            <BbqCard key={index} barbecue={barbecue.newBbq} />
          ))}
        <AddNewBbq />
      </Flex>
    </>
  );
};

export default Home;
