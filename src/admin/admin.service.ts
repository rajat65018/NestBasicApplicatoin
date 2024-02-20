import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Admin } from './admin.Schema';

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private adminModel:Model<Admin>){}
}
