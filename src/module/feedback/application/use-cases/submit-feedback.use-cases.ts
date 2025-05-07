import { Injectable } from '@nestjs/common';
import { SubmitFeedbackService } from '../../domain/service/submit-feedback.service';
import { FeedbackEntity } from '../../domain/entities/feedback.entity';
import { FeedbackAttachmentEntity } from '../../domain/entities/feedback-attachment.entity';

@Injectable()
export class SubmitFeedbackUseCase {
  constructor(private readonly uploader: SubmitFeedbackService) {}

  async execute(
    file: Express.Multer.File[],
    feedback: FeedbackEntity,
    attachments: FeedbackAttachmentEntity,
  ) {
    return this.uploader.upload(file, feedback, attachments);
  }
}
