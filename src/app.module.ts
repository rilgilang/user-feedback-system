import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './module/user/user.module';
import { FeedbackModule } from './module/feedback/feedback.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    CommonModule,
    UserModule,
    FeedbackModule,
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
