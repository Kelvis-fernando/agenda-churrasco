export interface ModalBqqDetailsProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  barbecue: {
    uuid: string;
    newBbq: {
      date: string;
      title: string;
      participants: ParticipantsType[];
      value: string;
      description: string;
    };
  };
}

export interface ParticipantsType {
  name: string;
  value: number;
}
