import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop()
    name: string;
    @Prop()
    email: string;
}

export const userSchema = SchemaFactory.createForClass(User);