import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractEntity } from "src/common/database/abstract.entity";

@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
    @Prop({ required: true })
    @Field()
    email: string;

    @Prop({ required: false })
    @Field({ nullable: true })
    phone?: string;

    @Prop({ required: true })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);