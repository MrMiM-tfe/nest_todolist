import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/users/entities/user.entities";

export class RegisterDto implements Omit<User, "role" | "_id"> {

    @MinLength(3)
    @MaxLength(24)
    @IsString()
    username: string;
    
    @MinLength(3)
    @MaxLength(24)
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @MinLength(8)
    @MaxLength(255)
    @IsString()
    password: string;

}