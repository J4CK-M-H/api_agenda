import { Request } from "express";
import { UserAuth } from "./userAuth.interface";

export interface AuthRquest extends Request {
  user: UserAuth;
}