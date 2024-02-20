import { NestFactory } from "@nestjs/core";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Admin{
    @Prop({ require: true, default: 'hello' })
    name: string;

    @Prop()
    email: string;

    @Prop()
    contact: string;
}

export const adminSchema = SchemaFactory.createForClass(Admin);