import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsString } from "class-validator";
import { Document, Types } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    _id:Types.ObjectId

    @IsString()
    @Prop({required: true})
    name:string

    @IsString()
    @Prop({required:true, unique: true})
    username:string

    @IsEmail()
    @Prop({required:true, unique: true})
    email:string

    @IsString()
    @Prop({required:true, select:false})
    password:string

    @Prop({default: ["user"]})
    role:string[]
}

export const UserSchema = SchemaFactory.createForClass(User)