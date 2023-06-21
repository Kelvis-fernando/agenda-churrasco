import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { BarbecueProps, BarbecueType } from '../types/BarbecueType';

const useHome = () => {
  const [barbecues, setBarbecues] = useState<BarbecueProps[]>([]);
  const [isLoaing, setIsloading] = useState<boolean>(false);

  const getBarbecues = (id?: string) => {
    setIsloading(true);
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const newBbqs: BarbecueProps[] = Object.values(data).map(
          (bbq: unknown) => ({
            newBbq: bbq as BarbecueType,
          })
        );

        if (id) {
          const desiredBbq: any = newBbqs.find(
            (bbq) => bbq.newBbq !== undefined && bbq.newBbq.uuid === id
          );
          return setBarbecues(desiredBbq);
        } else {
          setBarbecues(newBbqs);
        }
      }

      setIsloading(false);
    });
  };

  useEffect(() => {
    getBarbecues();
  }, []);

  return { barbecues, isLoaing, getBarbecues };
};

export default useHome;
