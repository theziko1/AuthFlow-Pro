import { Router,Request , Response } from "express";
import { SignIn , SignUp , logout } from "../controllers/User";
import  authorize  from "../middlewares/User";



const UserRoutes = Router()


UserRoutes.post("/signup",SignUp)
UserRoutes.post("/signin",SignIn)
UserRoutes.get("/logout",logout)
UserRoutes.get('/',authorize(['admin'], ['read']),(req : Request , res : Response) => {
    res.status(200).json({ message : "Protected route accessed"})
})

export default UserRoutes
