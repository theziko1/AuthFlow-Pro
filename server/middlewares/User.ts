import { NextFunction, Request , Response } from "express"
import { User } from "../models/User";
import { Roles } from "../models/Roles";
import { Permission } from "../models/Permission";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"




dotenv.config()
  

   
export default function authorize(roles: string[], permissions: string[] ) {
       return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // Extract token from cookie
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).json({success : false , message: 'Unauthorized No Token' });
            }

            // Verify token and extract user information
            const decodedToken: any = jwt.verify(token, process.env.SECRET_KEY as string);
            const userId = decodedToken.userId;

             // Fetch user from database using user ID
             const user = await User.findById(userId);
             if (!user) {
                 return res.status(401).json({success : false , message: 'Unauthorized' });
             }
 
             // Fetch roles associated with the user
             const userRoles = await Roles.find({ _id: { $in: user.roles } });
             if (!userRoles || userRoles.length === 0) {
                 return res.status(403).json({success : false , message: 'Forbidden: User has no roles' });
             }
 
              // Fetch permissions associated with user roles
            const rolePermissionIds = userRoles.flatMap(role => role.permissions);
            const userPermissions = await Permission.find({ _id: { $in: rolePermissionIds } });
            const userPermissionNames = userPermissions.map(permission => permission.name);

            // Check if user has at least one of the required roles
            if (roles.length > 0 && !roles.some(role => userRoles.map(r => r.name).includes(role))) {
                return res.status(403).json({success : false , message: 'Forbidden: Insufficient role' });
            }

            // Check if user has at least one of the required permissions
            if (permissions.length > 0 && !permissions.some(permission => userPermissionNames.includes(permission))) {
                return res.status(403).json({success : false , message: 'Forbidden: Insufficient permission' });
            }
 
             

            // If user has the required roles or permissions, grant access
            next();
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
           
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