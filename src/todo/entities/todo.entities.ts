import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsBoolean, IsMongoId, IsString } from "class-validator";
import { Document, Types } from "mongoose";

export type TaskDocument = Task & Document

@Schema()
export class Task {

    @IsString({message: "title is"})
    @Prop({required: true})
    title:string

    @IsString()
    @Prop({required: true})
    description: string

    @IsBoolean()
    @Prop({required: true})
    done: boolean

    @IsMongoId()
    @Prop({required: true, type: Types.ObjectId, ref:'User'})
    user: Types.ObjectId
}

export const TaskSchema = SchemaFactory.createForClass(Task)