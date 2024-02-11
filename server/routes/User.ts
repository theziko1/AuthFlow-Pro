import { Router,Request , Response } from "express";
import { SignIn , SignUp , logout } from "../controllers/User";
import  authorize, { ExisteUser }  from "../middlewares/User";



const UserRoutes = Router()


UserRoutes.post("/signup",ExisteUser,SignUp)
UserRoutes.post("/signin",SignIn)
UserRoutes.get("/logout",logout)
UserRoutes.get('/',authorize(['admin','user'], ['read']),(req : Request , res : Response) => {
    res.status(200).json({ success : true ,message : "Protected route accessed" })
})

export default UserRoutes
