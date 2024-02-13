import  { Document, HydratedDocument, Model, model, Schema, Types } from "mongoose";

export interface IUser extends Document {
      username : String,
      email : String,
      password : String,
      roles : Types.ObjectId
}

export type UserDocument = HydratedDocument<IUser>


export interface UserModel extends Model<IUser> {
    build() :void
}

const UserSchema = new Schema<IUser,UserModel>({
    username : {
        type : String,
        required : true,
        unique : true,
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
    roles : {
        type : Schema.Types.ObjectId,
        ref : 'Role',
        required : true,
        
    }

})

UserSchema.static("build",function () {
    console.log("test User schema")
})


export const User  = model<IUser,UserModel>('User',UserSchema)



User.build()







