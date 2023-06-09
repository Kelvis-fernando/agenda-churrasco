import { BarbecueType } from './BarbecueType';

export interface ModalBqqDetailsProps {
  id: string;
  isOpenModal: boolean;
  onCloseModal: () => void;
  barbecue: BarbecueType;
}

export interface ParticipantsType {
  name: string;
  value: number;
}
