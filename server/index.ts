import express , { Express}  from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import morgan from "morgan"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import UserRoutes from "./routes/User";
import RuleRoutes from "./routes/Roles";
import PermissionRoutes from "./routes/Permission";


// config
config()
// init express app
const app : Express = express()
// init PORT
const PORT = process.env.PORT
// middlewares
app.use(morgan("tiny"))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173",
}))
// Routes 
app.use("/",UserRoutes)
app.use("/",RuleRoutes)
app.use("/",PermissionRoutes)
// connect of database
connect(process.env.MONGO_URL as string)
.then(()=>{
    console.log("connected to the database")
}) 
.catch ((error)=> {
    console.log("connexion failed",error) 
})

// listen of app 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})
