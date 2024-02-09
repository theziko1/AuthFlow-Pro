import { validateRules } from "../middlewares/Validate";
import { Roles } from "../models/Roles";
import { Request , Response } from "express";



export const AddRule = async (req : Request, res : Response) => {
      try {
        const valid = validateRules(req.body)
         if (valid.error) {
            return res.status(401).json({error : valid.error.message})
         }
        const { name , permissions } =req.body
        await Roles.create({
            name,
            permissions
        })
        res.status(201).json({success : true ,message : "Rule Created succesfully"})
      } catch (error) {
        res.status(500).json({success : false ,error : "Rule Created failed "+error,})
      }
      
      
}

export const GetRules = async (req : Request, res : Response) => {
    try {
      const RulesFound = await Roles.find().populate({
        path: 'permissions',
        select: '-_id -__v' ,
         
    })
      if (RulesFound) {
        return  res.status(200).json({success:true ,message:"Successfully fetched Rules",RulesFound})
          
      }
      
    } catch (error) {
      res.status(500).json({success : false ,error : "Rules Fetched failed "+error,})
    }
    
    
}


export const GetRule = async (req : Request, res : Response) => {
    try {
      const RuleFound = await Roles.findById(req.params.id).populate({
        path: 'permissions',
        select: '-_id -__v' ,
         
    })
      if (RuleFound) {
        return  res.status(200).json({success:true ,message:"Successfully fetched Rule",RuleFound})
          
      }
      
    } catch (error) {
      res.status(500).json({success : false ,error : "Rule Fetched failed "+error,})
    }
    
    
}


export const UpdateRule =async(req : Request,res : Response)=>{
    try {
        const ruleId= req.params.id;
        const updatedRule= await Roles.findByIdAndUpdate(ruleId,req.body,{new :true})
        if (!updatedRule) {
            return res.status(404).json({success :false ,message: `Cannot find the task with the id ${ruleId}`});
            
        }
        res.status(200).json({success :true ,message: `Rule is updated successfully`});

        
    } catch (error) {
        res.status(500).json({success :false ,error: "Updated Rule failed" +error, });

            }
}


export const DeleteRule =async(req : Request,res : Response)=>{
    try {
        const ruleId= req.params.id;
        const deletedRule= await Roles.findByIdAndDelete(ruleId,req.body)
        if (!deletedRule) {
            return res.status(404).json({success :false ,message: `Cannot find the task with the id ${ruleId}`});
            
        }
        res.status(200).json({success :true ,message: `Rule is deleted successfully`});

        
    } catch (error) {
        res.status(500).json({success :false ,error: "Deleted Rule failed" +error, });

    }
}

