import { get, ref, update } from 'firebase/database';
import { FormEvent } from 'react';
import { db } from '../firebase';
import { getFormData } from '../utils/getFormData';

const useJoinTheBbq = (barbecue: { uuid: string }) => {
  const addParticipantToBarbecue = async (event: FormEvent) => {
    const data = await getFormData(event);
    const snapshot = await get(ref(db, `/${barbecue.uuid}`));
    const existingData = snapshot.val();

    if (
      existingData &&
      existingData.newBbq &&
      existingData.newBbq.participants
    ) {
      const updatedParticipants = [
        ...existingData.newBbq.participants,
        { name: data.name, value: data.value },
      ];
      const updatedData = {
        ...existingData,
        newBbq: {
          ...existingData.newBbq,
          participants: updatedParticipants,
        },
      };
      update(ref(db, `/${barbecue.uuid}`), updatedData);
    }
  };
  return { addParticipantToBarbecue };
};

export default useJoinTheBbq;
