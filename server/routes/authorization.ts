// routes/authorization.js
import { Router } from "express";
import { assignRole , assignPermission} from '../controllers/authorizationController';
import authorize from "../middlewares/User";

const AssignRouter = Router();



AssignRouter.post('/assign-role/:userId/:roleId', authorize(['admin'],['write']), assignRole);
AssignRouter.post('/assign-permission/:roleId/:permissionId',authorize(['admin'],['write']),assignPermission);

export default AssignRouter;
