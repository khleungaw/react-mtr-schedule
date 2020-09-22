import { TrainProps } from "./Train.interface";

export interface PlatformProps {
  trains: Array<TrainProps>;
  direction: string;
  lineColor : string;
}