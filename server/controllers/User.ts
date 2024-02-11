import { User } from "../models/User";
import { Request , Response } from "express";
import { genSalt , hash , compare} from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from "dotenv";
import { validateLogin, validateRegister } from "../middlewares/Validate";


config()

export const SignUp = async (req : Request, res : Response) => {
    try {
      const valid = validateRegister(req.body)
      if (valid.error) {
         return res.status(401).json({success : false ,error : valid.error.message})
      }
        const { username , email , password} = req.body
        const salt = await genSalt(10)
        const hashPassword = await hash(password,salt)
        await User.create({
           username, email , password: hashPassword
        })
        res.status(201).json({success : true, message : "User registered successfully"})
    } catch (error) {
        res.status(500).json({success : false, error : "User not registered "+error})
    }
    
}

export const SignIn = async (req : Request , res : Response) => {
       try {
         const valid = validateLogin(req.body)
         if (valid.error) {
            return res.status(401).json({success : false ,error : valid.error.message})
         }
        const { username , password} = req.body
        const UserLogin = await User.findOne({ username })
        if(!UserLogin) {
            return res.status(401).json({success : false,error : "Authentication failed"})
          }
          const MatchedPass = compare(password,UserLogin.password as string)
          if (!MatchedPass) {
             return res.status(401).json({success : false, error : "Authentication failed"})
          }
          const token = jwt.sign( {
            userId: UserLogin.id,
            username: UserLogin.username,
            roles: UserLogin.roles, 
        }, process.env.SECRET_KEY as string, {
             expiresIn: '6h',
             });
          res.cookie('token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
          })   
          res.status(200).json({ success : true, message : "login successfully", data : token}) 
       } catch (error) {
        res.status(500).json({success : false ,error : "login failed "+error})
       }
}

export const logout = (req : Request , res : Response) => {
    try {
       res.clearCookie('token')
       res.status(200).json({success : true, message : "logged out"})
    } catch (error) {
       res.status(500).json({success : false, error : "something went wrong "+error})
    }
 }