export interface User {
  id: number;
  username: string;
  password: string;
  role: number;
}

export interface UserDto {
  username: string;
  password: string;
}
