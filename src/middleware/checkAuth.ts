import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import UsuarioModel from '../models/Usuario';
import { Usuario } from '../interfaces/usuario.interface';
import { RequestWithUser } from '../interfaces/request-extends.interface';



const checkAuth = async(request: RequestWithUser, response: Response, next: NextFunction) => {
  // if ( request.headers.authorization && request.headers.authorization.startsWith('Bearer') ) {

  try {
    let token = request.headers.authorization;
    const decoded = jwt.verify(`${token?.split(' ').pop()}`, `${process.env.SECRET_KEY}`) as { id: string };
    let { id } = decoded as JwtPayload;
    request.user = <Usuario> await UsuarioModel.findById({_id: id}).select("-password -__v -createdAt -updatedAt");
  } catch (error) {
    return response.status(401).json({
      message: 'Token invalido'
    });
  }
  next();
}

export {
  checkAuth
}