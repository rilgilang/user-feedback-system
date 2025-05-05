import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './module/user/user.module';
import { FeedbackModule } from './module/feedback/feedback.module';

@Module({
  imports: [CommonModule, UserModule, FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
