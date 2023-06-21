export interface BarbecueType {
  newBbq: BarbecueType;
  uuid: string;
  title: string;
  description: string;
  value: number;
  date: string;
  participants: [];
}
export interface BarbecueProps {
  newBbq?: BarbecueType;
}
