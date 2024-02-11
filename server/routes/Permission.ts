import { Router } from "express";
import { createPermission , getPermissions , getPermissionById , updatePermission , deletePermission } from "../controllers/Permission";
import authorize from "../middlewares/User";

const PermissionRoutes = Router()

PermissionRoutes.post("/permission",authorize(['admin'],['write']),createPermission)
PermissionRoutes.get("/permissions",authorize([],['read']),getPermissions)
PermissionRoutes.get("/permission/:id",authorize([],['read']),getPermissionById)
PermissionRoutes.put("/permission/:id",authorize(['admin'],['update']),updatePermission)
PermissionRoutes.delete("/permission/:id",authorize(['admin'],['delete']),deletePermission)


export default PermissionRoutes