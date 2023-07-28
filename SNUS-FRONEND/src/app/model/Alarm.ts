import {AnalogInput} from "./AnalogInput";

export interface Alarm {
  id: number;
  threshHold: number;
  message: string;
  analogInput?: AnalogInput;
  analogId?: number;
  timeStamp: Date;
  priority: number;
  type: string;
  measureUnit?: string;
  isDeleted: boolean;
}

export interface AlarmDto{
  threshHold: number;
  message: string;
  analogId?: number;
  priority: number;
  type: string;
  timeStamp: Date;
}
