import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, adminSchema } from './admin.Schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Admin.name,schema:adminSchema}])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
