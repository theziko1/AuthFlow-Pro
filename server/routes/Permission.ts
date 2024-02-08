import { Router } from "express";
import { createPermission , getPermissions , getPermissionById , updatePermission , deletePermission } from "../controllers/Permission";

const PermissionRoutes = Router()

PermissionRoutes.post("/permission",createPermission)
PermissionRoutes.get("/permissions",getPermissions)
PermissionRoutes.get("/permission/:id",getPermissionById)
PermissionRoutes.put("/permission/:id",updatePermission)
PermissionRoutes.delete("/permission/:id",getPermissions)


export default PermissionRoutes