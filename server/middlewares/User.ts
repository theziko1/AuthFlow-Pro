import { NextFunction, Request , Response } from "express"
import { User } from "../models/User";
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }

export const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ success : false ,error : "Acces denied"})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        (req as CustomRequest).token = decoded;
        
        
        next();
    } catch (error) {
        res.status(401).json({ success : false , error: 'Invalid token' });
    }
}






export const ExisteUser = async( req : Request , res : Response, next : NextFunction) => {
    try {
            const { username } = req.body
            const CheckUsername = await User.findOne({ username })
            
            
            if (CheckUsername) {
               return res.status(401).json({
                    success : false,
                    message : "User already Existe"
                })
            }
            next()
    } catch (error) {
        res.status(500).json({success : false, error : "User not registered "+ error})
    }
    
    


}