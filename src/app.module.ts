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
    MongooseModule.forRoot('asdada'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
