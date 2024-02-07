import  { Document, HydratedDocument, Model, Schema, Types } from "mongoose";

export interface UserSchema extends Document {
      username : String,
      email : String,
      password : String,
      roles : Types.ObjectId
}

export type UserDocument = HydratedDocument<UserSchema>

const UserSchema = new Schema<UserSchema>({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    roles : [{
        type : Schema.Types.ObjectId,
        ref : 'Roles',
        required : true
    }]
})

export const User : UserDocument = new Model('User',UserSchema)