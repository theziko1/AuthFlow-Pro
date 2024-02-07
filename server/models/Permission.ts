import { Document, HydratedDocument, Model, Schema } from "mongoose";


interface PermissionSchema extends Document {
    name : String
}

export type PermissionDocument = HydratedDocument<PermissionSchema>

const PermissionSchema = new Schema<PermissionSchema>({
    name : {
        type : String,
        enum : ["CREATE-USER","READ-USER","UPDATE-USER","DELETE-USER"],
        default : "READ-USER",
        required : true
    }
})

export const Permission : PermissionDocument = new Model('Permission',PermissionSchema)