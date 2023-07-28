export interface DigitalInput {
  id: number;
  name?: string;
  description?: string;
  ioAddress?: string;
  driver?: string;
  scanTime: number;
  isActive?: boolean;
  dateTime: Date;
  value: number;
}

export interface DigitalInputDto {
  name?: string;
  description?: string;
  ioAddress?: string;
  driver?: string;
  scanTime: number;
  isActive?: boolean;
  dateTime: Date;
  value: number;
}
