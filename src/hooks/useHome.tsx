import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { BarbecueProps, Bbq } from '../types/BarbecueType';

const useHome = () => {
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

  return { barbecues };
};

export default useHome;
