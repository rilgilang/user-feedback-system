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

  async execute(
    sort: string,
    filter: string,
    q: string,
    type: string,
    page: number,
    per_page: number,
  ): Promise<FeedbackEntityWithAttachment[]> {
    const feedbacks = await this.feedbackRepository.findAll(
      sort,
      filter,
      q,
      type,
      page,
      per_page,
    );

    const result = await Promise.all(
      feedbacks.map(async (feedback) => {
        feedback.status = feedback.status.toLowerCase();
        feedback.type = feedback.type.toLowerCase();

        const attachments = await this.feedbackAttachmentRepository.findById(
          feedback.id,
        );

        return {
          ...feedback,
          attachment: attachments?.attachment_link ?? [],
        };
      }),
    );

    return result;
  }
}
