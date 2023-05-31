import { Flex } from '@chakra-ui/react';
import BbqCard from '../components/BbqCard';
import AddNewBbq from '../components/AddNewBbq';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { BarbecueProps, Bbq } from '../types/BarbecueType';

const Home = () => {
  const [barbecues, setBarbecues] = useState<BarbecueProps[]>([]);

  const getBarbecues = () => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const newBbqs: BarbecueProps[] = Object.values(data).map(
          (bbq: any) => ({
            newBbq: bbq as Bbq,
          })
        );
        setBarbecues(newBbqs);
      }
    });
  };

  useEffect(() => {
    getBarbecues();
  }, []);

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
