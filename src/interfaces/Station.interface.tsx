import { TrainProps } from "./Train.interface";

interface Data {
  [key: string] : Object
}

export interface StationProps {
  station: string;
  line:string;
  JSON: Data;
  toHome: Function;
  refresh: Function;
}