import { Auth } from "./auth.interface";

export interface Usuario extends Auth {
  nombre: string;
  apellido: string;
}