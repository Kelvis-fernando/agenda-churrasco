import { Flex } from '@chakra-ui/react';
import BbqCard from '../components/BbqCard';
import AddNewBbq from '../components/AddNewBbq';
import useHome from '../hooks/useHome';
import Spinning from '../components/Spinning';
import { BarbecueType } from '../types/BarbecueType';

const Home = () => {
  const { barbecues, isLoaing } = useHome();

  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap" mt="10">
        {barbecues &&
          barbecues.map((barbecue: BarbecueType, index: number) => (
            <BbqCard
              key={index}
              newBbq={barbecue.newBbq}
              uuid={barbecue.uuid}
              title={''}
              description={''}
              value={0}
              date={''}
              participants={[]}
            />
          ))}
        <AddNewBbq />
      </Flex>
      {isLoaing && <Spinning />}
    </>
  );
};

export default Home;
