import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tradingBe:rajat123@atlascluster.elgcvpa.mongodb.net/nest'),UserModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
