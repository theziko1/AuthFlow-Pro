import express , { Express}  from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import morgan from "morgan"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import UserRoutes from "./routes/User";
import RuleRoutes from "./routes/Roles";
import PermissionRoutes from "./routes/Permission";
import AssignRouter from "./routes/authorization";
import swaggerDocs from './docs/swagger';



// config
config()
// init express app
const app : Express = express()
// init PORT
const PORT = process.env.PORT
// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : "https://authflow-pro.onrender.com/",
}))
// Routes 
app.use("/",UserRoutes)
app.use("/",RuleRoutes)
app.use("/",PermissionRoutes)
app.use("/",AssignRouter)

// connect of database
connect(process.env.MONGO_URL as string)
.then(()=>{
    console.log("connected to the database")
}) 
.catch ((error)=> {
    console.log("connexion failed",error) 
})

swaggerDocs(app, PORT as string)

// listen of app 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})


export default app;
