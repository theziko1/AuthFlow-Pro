import { Router } from "express";
import { AddRule ,GetRules ,  GetRule , UpdateRule , DeleteRule } from "../controllers/Roles";
import authorize from "../middlewares/User";

const RuleRoutes = Router()


RuleRoutes.post("/rule",authorize(['admin'],['write']),AddRule)
RuleRoutes.get("/rules",authorize([],['read']),GetRules)
RuleRoutes.get("/rule/:id",authorize([],['read']),GetRule)
RuleRoutes.put("/rule/:id",authorize(['admin'],['update']),UpdateRule)
RuleRoutes.delete("/rule/:id",authorize(['admin'],['delete']),DeleteRule)


export default RuleRoutes