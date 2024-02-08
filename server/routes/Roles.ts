import { Router } from "express";
import { AddRule ,GetRules ,  GetRule , UpdateRule , DeleteRule } from "../controllers/Roles";

const RuleRoutes = Router()


RuleRoutes.post("/rule",AddRule)
RuleRoutes.get("/rules",GetRules)
RuleRoutes.get("/rule/:id",GetRule)
RuleRoutes.put("/rule/:id",UpdateRule)
RuleRoutes.delete("/rule/:id",DeleteRule)


export default RuleRoutes