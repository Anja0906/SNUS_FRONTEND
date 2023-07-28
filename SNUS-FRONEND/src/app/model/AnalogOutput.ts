export interface AnalogOutput {
  id: number;
  name?: string;
  description?: string;
  ioAddress?: string;
  initialValue: number;
  lowLimit: number;
  highLimit: number;
  units?: string;
  value: number;
  dateTime: Date;
}

export interface AnalogOutputDto{
  name?: string;
  description?: string;
  ioAddress?: string;
  initialValue: number;
  lowLimit: number;
  highLimit: number;
  units?: string;
  value: number;
  dateTime: Date;
}
