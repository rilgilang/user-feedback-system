import { Inject, Injectable } from '@nestjs/common';
import { FeedbackAttachmentsRepository } from '../../domain/repositories/feedback-attachments.repository.interface';
import { FeedbackAttachmentEntity } from '../../domain/entities/feedback-attachment.entity';
import { Model } from 'mongoose';
import { FeedbackAttachment } from 'src/module/schemas/feedback-attachments.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FeedbackAttachmentsMongoRepository
  implements FeedbackAttachmentsRepository
{
  constructor(
    @InjectModel(FeedbackAttachment.name)
    private feedbackAttachment: Model<FeedbackAttachment>,
  ) {}

  async findAll(): Promise<FeedbackAttachmentEntity[]> {
    const feedbacks = await this.feedbackAttachment.find();
    return feedbacks.map(
      (b) =>
        new FeedbackAttachmentEntity(
          b.id,
          b.feedback_id,
          b.attachment_link,
          b.created_at,
          b.updated_at,
        ),
    );
  }

  async findById(id: string): Promise<FeedbackAttachmentEntity | null> {
    const b = await this.feedbackAttachment.findOne({
      where: { id },
    });
    return b
      ? new FeedbackAttachmentEntity(
          b.id,
          b.feedback_id,
          b.attachment_link,
          b.created_at,
          b.updated_at,
        )
      : null;
  }

  async create(attachment: FeedbackAttachmentEntity): Promise<null> {
    await this.feedbackAttachment.create(attachment);

    return null;
  }
}
