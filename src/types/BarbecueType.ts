export interface BarbecueType {
  uuid: string;
  title: string;
  description: string;
  value: number;
  date: string;
}
export interface BarbecueProps {
  newBbq?: BarbecueType;
}
