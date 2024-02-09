// routes/authorization.js
import { Router } from "express";
import { assignRole , assignPermission} from '../controllers/authorizationController';

const AssignRouter = Router();



AssignRouter.post('/assign-role', assignRole);
AssignRouter.post('/assign-permission',assignPermission);

export default AssignRouter;
