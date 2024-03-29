
import {User} from '../models/User';
import {Roles} from '../models/Roles';
import {Permission} from '../models/Permission';
import { Request, Response } from 'express';

export const assignRole = async (req : Request, res : Response) => {
    try {
        const { userId, roleId } = req.params;
        const user = await User.findById(userId);
        const role = await Roles.findById(roleId);
        if (!user || !role) {
            return res.status(404).json({success : false , message: 'User or Role not found' });
        }
        user.roles = role._id;
        await user.save();
        res.status(200).json({success : true , message: 'Role assigned to user successfully' });
    } catch (error) {
        res.status(500).json({success : false , error });
    }
};

export const assignPermission = async (req : Request, res : Response) => {
    try {
        const { roleId, permissionId } = req.params;
        const role = await Roles.findById(roleId);
        const permission = await Permission.findById(permissionId);
        if (!role || !permission) {
            return res.status(404).json({success : false , message: 'Role or Permission not found' });
        }
        role.permissions.push(permission._id);
        await role.save();
        res.status(200).json({success : true , message: 'Permission assigned to role successfully' });
    } catch (error) {
        res.status(500).json({success : false , error });
    }
};
