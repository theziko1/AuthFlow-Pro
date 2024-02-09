import { NextFunction, Request , Response } from "express"
import { User } from "../models/User";
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import { RolesDocument } from "../models/Roles";

dotenv.config()



interface CustomRequest extends Request {
    user?: RolesDocument; 
}   

   
export default function authorize(roles: string[] = [], permissions: string[] = []) {
       return (req: CustomRequest, res: Response, next: NextFunction) => {
           const token = req.cookies.token;
           if (!token) {
               return res.status(401).json({success : false, message: 'Unauthorized' });
           }
           jwt.verify(token, process.env.SECRET_KEY as string, (err: any, user: any) => {
               if (err) {
                   return res.status(403).json({success : false, message: 'Forbidden' });
               }
               if (roles && roles.length > 0 && !roles.includes(user.roles)) {
                   return res.status(403).json({success : false, message: 'Insufficient role' });
               }
               if (permissions && permissions.length > 0) {
                   const userPermissions = user.permissions.map((permission: any) => permission.name);
                   if (!permissions.some(permission => userPermissions.includes(permission))) {
                       return res.status(403).json({success : false, message: 'Insufficient permission' });
                   }
               }
               req.user = user;
               next();
           });
       };
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