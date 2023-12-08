import { ObjectId } from "mongoose";

export interface UserAuth {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
}