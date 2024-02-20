import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name)private userModel:Model<User>){}
    async createUser(payload) {
        await new this.userModel(payload).save();
         return 'User created successfully';
    }

    login(payload) {
        return 'user login successfull';
    }

    async updateUser(payload) {
        await this.userModel.findByIdAndUpdate({}, { $set: payload });
        return 'Data updated successfully';
    }

    async findOneUser(searchQuery) {
        const userData = await this.userModel.findOne(searchQuery).lean();
        return userData;
    }

}
