import { FeedbackAttachmentEntity } from '../entities/feedback-attachment.entity';

export interface FeedbackAttachmentsRepository {
  findAll(): Promise<FeedbackAttachmentEntity[]>;
  findById(id: string): Promise<FeedbackAttachmentEntity | null>;
  create(
    feedBack: FeedbackAttachmentEntity,
  ): Promise<FeedbackAttachmentEntity | null>;
}
