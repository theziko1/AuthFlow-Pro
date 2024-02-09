import Joi from "joi";
import { IUser } from "../models/User";
import { IRoles } from "../models/Roles";
import { IPermission } from "../models/Permission";


// login for a User

export const validateLogin = (login : {username : string , password : string}) => {
   const loginSchema = Joi.object({
    username : Joi.string().min(4).max(10).required(),
      password : Joi.string().min(8).max(18).required()
   });

   return loginSchema.validate(login)
}


// Registrer for a User

export const validateRegister = (User : IUser) => {
    const userSchema = Joi.object<IUser>({
        username : Joi.string().min(4).max(10).required(),
       email : Joi.string().email().required(),
       password : Joi.string().min(8).max(18).required(),
       roles :Joi.array().items(Joi.string()),

    });
 
    return userSchema.validate(User)
 }



// for a post the rule
export const validateRules = (Roles : IRoles) =>{
    const RulesSchema = Joi.object<IRoles>({
    name : Joi.string().min(3).max(10).required(),
    permissions :Joi.array().items(Joi.string()),
    
    })

    return RulesSchema.validate(Roles)
}

// for a post the permission
export const validatePermission = (Permission : IPermission) =>{
    const PermissionSchema = Joi.object<IPermission>({
    name : Joi.string().min(3).max(15).required(),
    
    
    })

    return PermissionSchema.validate(Permission)
}