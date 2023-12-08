import { Auth } from "../interfaces/auth.interface";
import { Usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/Usuario";
import { generarToken } from "../utils/jwt";
import bcrypt from 'bcrypt';


const registerUser = async(usuario: Usuario) => {

  let { email } = usuario;

  const isAlreadyExist = await UsuarioModel.findOne({ email });

  if(isAlreadyExist) {
    throw new Error(`Usuario ${usuario} already exists`);
  }

  await UsuarioModel.create(usuario);
  return 'Usuario registrado';

}

const authenticateUser = async(data: Auth) => {

  let { email, password } = data;

  const isAlreadyExist = await UsuarioModel.findOne({ email });

  if( isAlreadyExist && ( await bcrypt.compare(password, isAlreadyExist.password ) ) ) {

    const token = generarToken(`${isAlreadyExist._id}`);

    const data = {
      token,
      _id: isAlreadyExist._id,
      nombre: isAlreadyExist.nombre,
      apellido: isAlreadyExist.apellido,
      email: isAlreadyExist.email
    }
    
    return data;
    
  }else {
    throw new Error("Correo y/o Password incorrecto");
  }
}

export {
  registerUser,
  authenticateUser
}