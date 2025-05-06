import { Module } from '@nestjs/common';
import { FeedbackController } from './interface/controller/feedback.controller';
import { SubmitFeedbackService } from './domain/service/submit-feedback.service';
import { SubmitFeedbackUseCase } from './application/use-cases/submit-feedback.use-cases';
import { FeedbackPostgresPrismaRepository } from './infrastructure/postgre/feedback.postgres.prisma.repository';

@Module({
  controllers: [FeedbackController],
  providers: [
    SubmitFeedbackUseCase,
    SubmitFeedbackService,
    FeedbackPostgresPrismaRepository,
  ],
  exports: [FeedbackPostgresPrismaRepository],
})
export class FeedbackModule {}
