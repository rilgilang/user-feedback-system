import { Module } from '@nestjs/common';
import { FeedbackController } from './interface/controller/feedback.controller';
import { SubmitFeedbackUseCase } from './application/use-cases/submit-feedback.use-cases';

@Module({
  controllers: [FeedbackController],
  providers: [SubmitFeedbackUseCase],
})
export class FeedbackModule {}
