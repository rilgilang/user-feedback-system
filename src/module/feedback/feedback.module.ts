import { Module } from '@nestjs/common';
import { FeedbackController } from './interface/controller/feedback.controller';
import { SubmitFeedbackService } from './domain/service/submit-feedback.service';
import { SubmitFeedbackUseCase } from './application/use-cases/submit-feedback.use-cases';
import { FeedbackPostgresPrismaRepository } from './infrastructure/postgre/feedback.postgres.prisma.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FeedbackAttachment,
  FeedbackAttachmentSchema,
} from '../schemas/feedback-attachments.schema';
import { FeedbackAttachmentsMongoRepository } from './infrastructure/mongo/feedback-attachments.mongo.prisma.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedbackAttachment.name, schema: FeedbackAttachmentSchema },
    ]),
  ],
  controllers: [FeedbackController],
  providers: [
    SubmitFeedbackUseCase,
    SubmitFeedbackService,
    FeedbackPostgresPrismaRepository,
    FeedbackAttachmentsMongoRepository,
  ],
  exports: [FeedbackPostgresPrismaRepository],
})
export class FeedbackModule {}
