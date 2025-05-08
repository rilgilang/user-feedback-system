import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './module/user/user.module';
import { FeedbackModule } from './module/feedback/feedback.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CommonModule,
    UserModule,
    FeedbackModule,
    MongooseModule.forRoot(
      'mongodb+srv://ini_user:2Qt5OClDLLcHQ5OI@cluster0.r8vyb.mongodb.net/user-feedback?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
