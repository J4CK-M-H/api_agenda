import { ObjectId } from "mongoose";

export interface Contact {
  nombre: string;  
  apellido: string;  
  email: string;  
  telefono: string;  
  fecha_nacimiento: string;  
  foto?: string;
  usuario: ObjectId
}