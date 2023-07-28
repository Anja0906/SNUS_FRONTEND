export interface DigitalOutput {
  id: number;
  name?: string;
  description?: string;
  ioAddress?: string;
  initialValue: number;
  dateTime: Date;
  value: number;
}

export interface DigitalOutputDto{
  name?: string;
  description?: string;
  ioAddress?: string;
  initialValue: number;
  dateTime: Date;
  value: number;
}
