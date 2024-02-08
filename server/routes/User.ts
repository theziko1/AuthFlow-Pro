import { Router } from "express";
import { SignIn , SignUp , logout } from "../controllers/User";


const UserRoutes = Router()


UserRoutes.post("/signup",SignUp)
UserRoutes.post("/signin",SignIn)
UserRoutes.get("/logout",logout)

export default UserRoutes
