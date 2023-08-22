import {Alarm} from "./Alarm";

export interface AnalogInput {
  id: number;
  name?: string;
  description?: string;
  ioAddress?: string;
  driver?: string;
  scanTime: number;
  isActive?: boolean;
  dateTime: Date;
  alarms: Alarm[];
  lowLimit: number;
  highLimit: number;
  units?: string;
  value: number;
}

export interface AnalogInputDto {
  name?: string;
  description?: string;
  ioAddress?: string;
  driver?: string;
  scanTime: number;
  dateTime: Date;
  lowLimit: number;
  highLimit: number;
  units?: string;
  value: number;
}
