import { Document, HydratedDocument, Model, model, Schema } from "mongoose";


export interface IPermission extends Document {
    name : String
}

export type PermissionDocument = HydratedDocument<IPermission>

export interface PermissionModel extends Model<IPermission> {
    build() :void
}

const PermissionSchema = new Schema<IPermission,PermissionModel>({
    name : {
        type : String,
        unique : true,
        required : true
    }
})

PermissionSchema.static("build",function () {
    console.log("test Permission schema")
})

export const Permission  = model<IPermission,PermissionModel>('Permission',PermissionSchema)