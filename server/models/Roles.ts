import { Document, HydratedDocument, Model, Schema, Types } from "mongoose";

export interface RolesSchema extends Document {
     name : String,
     permissions : Types.ObjectId
}


export type RolesDocument = HydratedDocument<RolesSchema>

 const RolesSchema = new Schema<RolesSchema>({
    name : {
        type : String,
        enum : ["SUPER-ADMIN","ADMIN","USER"],
        default : "USER",
        required : true
    },
    permissions :[{
        type : Schema.Types.ObjectId,
        ref : 'Permission'
    }]
 })

 export const Roles : RolesDocument = new Model('Role',RolesSchema)