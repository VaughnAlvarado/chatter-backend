import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsPhoneNumber, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsStrongPassword()
    password: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsPhoneNumber()
    phone?: string;
}
