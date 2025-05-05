import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './module/user/user.module';
import { FeedbackModule } from './module/feedback/feedback.module';
import { UserController } from './module/user/interface/controller/user.controller';

@Module({
  imports: [CommonModule, UserModule, FeedbackModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
