import { Request, Response } from "express";
import { authenticateUser, registerUser } from "../services/usuario";

const register = async(request: Request, response: Response) => {

  let { body } = request;

  try {
    const responseUsuario = await registerUser(body);
    return response.status(201).json({message: responseUsuario});

  } catch (error: any ) {
    console.log(error);
    return response.status(500).send(error.message);
  }

}

let authenticate = async({ body }: Request, response: Response) => {

  try {
    const usuarioResponse = await authenticateUser(body);
    return response.status(200).send(usuarioResponse);
  
  } catch (error: any) {
    return response.status(500).json({message: error.message});
  }
  
}


const session = async(request: Request, response: Response) => {

  const { user }  = <any>request;
  return response.json(user)

}

export {
  register,
  authenticate,
  session
}