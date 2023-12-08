import { Request, Response } from "express";
import { dropContact, getContactosById, insertContact, updateContact } from "../services/contacto";
import { Contact } from "../interfaces/contacto.interface";
import { AuthRquest } from '../interfaces/authRequest.interface';

const contactos = async (request: Request, response: Response) => {

  
  const { user } = <AuthRquest>request;
 
  try {
    const reponseContactos = await getContactosById(user.id);
    return response.status(201).json(reponseContactos);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }

}

const addContact = async({body, file}: Request, response: Response) => {

  let contact: Contact = {
    nombre: body.nombre, 
    apellido: body.apellido,
    telefono: body.telefono,
    email: body.email,
    fecha_nacimiento: body.fecha_nacimiento,
    foto: `${file?.filename}`,
    usuario: body.usuarioId
  }
  
  try {
    const responseContact = await insertContact(contact);
    return response.status(200).json(responseContact);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
}

const editContact = async({body, file, params}: Request, response: Response) => {

  const { id } = params;
  let contact = {}

  if( file?.filename ) {
      contact = {
      nombre: body.nombre, 
      apellido: body.apellido,
      telefono: body.telefono,
      email: body.email,
      fecha_nacimiento: body.fecha_nacimiento,
      foto: `${file?.filename}`,
    }
  }else {
    contact = { ...body }
  }
  
  try {
    const responseContact = await updateContact(id,contact);
    return response.status(200).json(responseContact);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
}

const deleteContact = async({params}: Request, response: Response) => {

  try {
    const responseContact = await dropContact(params.id);
    return response.status(200).json(responseContact);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
}



export {
  contactos,
  addContact,
  editContact,
  deleteContact
}