import { IsMongoId } from "class-validator";
import { Types } from "mongoose";

export class CreateByUserDto {
    @IsMongoId()
    user:Types.ObjectId
}