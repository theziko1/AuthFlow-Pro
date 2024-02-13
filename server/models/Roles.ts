import { Document, HydratedDocument, model, Model , Schema, Types } from "mongoose";

export interface IRoles extends Document {
     name : String,
     permissions : Types.ObjectId[]
}


export type RolesDocument = HydratedDocument<IRoles>

export interface RoleModel extends Model<IRoles> {
    build() : void
}

 const RolesSchema = new Schema<IRoles,RoleModel>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    permissions :[{
        type : Schema.Types.ObjectId,
        ref : 'Permission',
       
    }]
 })

 RolesSchema.static("build",function () {
    console.log("test Roles schema")
})

 export const Roles = model<IRoles,RoleModel>('Role',RolesSchema)


Roles.build()



