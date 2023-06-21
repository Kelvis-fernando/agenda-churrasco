import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { BarbecueType } from '../types/BarbecueType';

const useHome = () => {
  const [barbecues, setBarbecues] = useState<BarbecueType[]>();
  const [isLoaing, setIsloading] = useState<boolean>(false);

  const getBarbecues = (id?: string) => {
    setIsloading(true);
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const newBbqs = Object.values(data).map(
          (bbq: unknown) => bbq as BarbecueType
        );

        if (id) {
          const desiredBbq: BarbecueType | undefined = newBbqs.find(
            (bbq: BarbecueType) => bbq.newBbq.uuid === id
          );

          if (desiredBbq) {
            setBarbecues([desiredBbq]);
          } else {
            setBarbecues([]);
          }
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
