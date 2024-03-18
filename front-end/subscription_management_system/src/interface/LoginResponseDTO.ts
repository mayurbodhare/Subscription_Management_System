import { UserDTO } from "./userDTO";

export interface LoginResponseDTO {
    userDTO: UserDTO;
    message: string;
    status: number;
  }