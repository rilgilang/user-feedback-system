import { Injectable } from '@nestjs/common';
import {
  FeedbackEntity,
  FeedbackEntityWithAttachment,
} from '../../domain/entities/feedback.entity';
import { FeedbackAttachmentEntity } from '../../domain/entities/feedback-attachment.entity';
import { FeedbackPostgresPrismaRepository } from '../../infrastructure/postgre/feedback.postgres.prisma.repository';
import { FeedbackAttachmentsMongoRepository } from '../../infrastructure/mongo/feedback-attachments.mongo.prisma.repository';

@Injectable()
export class GetFeedbackUseCase {
  constructor(
    private readonly feedbackRepository: FeedbackPostgresPrismaRepository,
    private readonly feedbackAttachmentRepository: FeedbackAttachmentsMongoRepository,
  ) {}

  async execute(): Promise<FeedbackEntityWithAttachment[]> {
    const feedbacks = await this.feedbackRepository.findAll();

    const result = await Promise.all(
      feedbacks.map(async (feedback) => {
        const attachments = await this.feedbackAttachmentRepository.findById(
          feedback.id,
        );

        console.info('feedbackId --< ', feedback.id);
        console.info('attachment --< ', attachments);
        return {
          ...feedback,
          attachment: attachments?.attachment_link ?? [],
        };
      }),
    );

    return result;
  }
}
