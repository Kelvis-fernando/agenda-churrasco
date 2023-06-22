export interface JoinTheBbqProps {
  id: string
  isOpen: boolean;
  onClose: () => void;
  barbecue: { uuid: string };
}
