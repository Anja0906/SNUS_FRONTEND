import {Alarm} from "./Alarm";

export interface AlarmActivation {
  id: number;
  timestamp: Date;
  alarm: Alarm;
  alarmId?: number;
}
