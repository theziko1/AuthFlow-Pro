import { validatePermission } from "../middlewares/Validate";
import { Permission } from "../models/Permission";
import { Request , Response } from "express";

// Créer une nouvelle permission
export const  createPermission = async(req : Request, res : Response)  => {
    try {
      const valid = validatePermission(req.body)
         if (valid.error) {
            return res.status(401).json({success : false ,error : valid.error.message})
         }
      const { name, description } = req.body;
  
      const existingPermission = await Permission.findOne({ name });
      if (existingPermission) {
        return res.status(400).json({ success : false ,message: 'This permission already existe.' });
      }
  
      const newPermission = new Permission({ name, description });
      await newPermission.save();
  
      res.status(201).json({success : true ,data : newPermission});
    } catch (error) {
     
      res.status(500).json({success : false , error: 'Error on creation of the permission.'+ error });
    }
  }
  
  // Lire toutes les permissions
  export const  getPermissions = async (req : Request, res : Response)  => {
    try {
      const permissions = await Permission.find();
      res.status(200).json({success : true , data : permissions});
    } catch (error) {
      
      res.status(500).json({success : false , error: 'Error on getting of the permission.'+ error });
    }
  }
  
  // Lire une permission spécifique par ID
  export const  getPermissionById = async (req: Request, res: Response) => {
    try {
      const permission = await Permission.findById(req.params.id);
      if (!permission) {
        return res.status(404).json({ success : false ,message: 'Permission not found.' });
      }
      res.status(200).json({success : true , data : permission});
    } catch (error) {
      res.status(500).json({success : false , error: 'Error on getting of the permission.'+ error });
    }
  }
  
  // Mettre à jour une permission
  export const updatePermission = async(req : Request, res : Response)  =>{
    try {
      const { name, description } = req.body;
  
      const updatedPermission = await Permission.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
  
      if (!updatedPermission) {
        return res.status(404).json({success : false ,  message: 'Permission not found.' });
      }
  
      res.status(200).json({success : true , data : updatedPermission});
    } catch (error) {
      res.status(500).json({success : false , error: 'Error on deleting of the permission. '+error  });
    }
  }
  
  // Supprimer une permission
  export const deletePermission = async (req : Request, res : Response) => {
    try {
      const deletedPermission = await Permission.findByIdAndDelete(req.params.id);
      if (!deletedPermission) {
        return res.status(404).json({ success : false ,message: 'Permission not found.' });
      }
      res.status(200).json({success : true , message: 'Permission deleted successfully.' });
    } catch (error) {
      
      res.status(500).json({ success : true , error: 'Error on deleting of the permission. '+error });
    }
  }
