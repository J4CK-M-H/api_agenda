import ContactoModel from "../models/Contacto";
import { Contact } from "../interfaces/contacto.interface";

const getContactosById = async (id: string) => {

  try {
    const responseContactos = await ContactoModel.find({ usuario: id });
    return responseContactos;
  } catch (error) {
    throw new Error('ERROR_OBTENER_CONTACTOS');
  }
}

const insertContact = async (contact: Contact) => {
  const responseContacts = await ContactoModel.create(contact);
  return responseContacts;
}

const updateContact = async (id: string, contact: Object) => {
  const responseContacts = await ContactoModel.findByIdAndUpdate({ _id: id }, contact, { new: true });
  return responseContacts;
}

const dropContact = async (id: string) => {
  const responseContacts = await ContactoModel.findByIdAndDelete(id);
  return responseContacts;
}

export {
  getContactosById,
  insertContact,
  updateContact,
  dropContact
}