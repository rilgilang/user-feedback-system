import { Injectable } from '@nestjs/common';
import { FeedbackPostgresPrismaRepository } from '../../infrastructure/postgre/feedback.postgres.prisma.repository';
import { FeedbackEntity } from '../entities/feedback.entity';
import { FeedbackAttachmentEntity } from '../entities/feedback-attachment.entity';
import { FeedbackAttachmentsRepository } from '../repositories/feedback-attachments.repository.interface';

@Injectable()
export class SubmitFeedbackService {
  constructor(
    private readonly feedbackRepository: FeedbackPostgresPrismaRepository,
    private readonly feedbackAttachmentRepository: FeedbackAttachmentsRepository,
  ) {}
  upload(
    file: Express.Multer.File[],
    feedback: FeedbackEntity,
    attachments: FeedbackAttachmentEntity,
  ) {
    this.feedbackRepository.create(feedback);
    this.feedbackAttachmentRepository.create(attachments);
    console.info('blog goblok --> ');
    const att = this.feedbackAttachmentRepository.findAll();
    console.info('attachments --> ', att);
    return 'uploaded-url-or-result';
  }
}
