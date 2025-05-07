import { Inject, Injectable, Provider } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { FeedbackAttachmentsRepository } from '../../domain/repositories/feedback-attachments.repository.interface';
import { FeedbackAttachmentEntity } from '../../domain/entities/feedback-attachment.entity';
import { Db, MongoClient } from 'mongodb';

@Injectable()
export class FeedbackAttachmentsMongoRepository
  implements FeedbackAttachmentsRepository
{
  constructor(
    @Inject('MONGO_CLIENT') private mongoClient: MongoClient,
    private readonly Db: Db,
  ) {
    this.mongoClient.db('user-feedback');
  }

  async findAll(): Promise<FeedbackAttachmentEntity[]> {
    const feedbacks = await this.Db.collection('feedback_attachment')
      .find()
      .toArray();

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
    const b = await this.Db.collection('feedback_attachment').findOne({
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
    // await this.prisma.mongo.feedbackAttachment.create({
    //   data: {
    //     feedback_id: attachment.feedback_id,
    //     attachment_link: attachment.attachment_link,
    //     created_at: attachment.createdAt,
    //     updated_at: attachment.updatedAt,
    //   },
    // });

    await this.Db.collection('feedback_attachment').insertOne({
      feedback_id: '123',
      attachment_link: ['https://example.com/file.jpg'],
      created_at: new Date(),
      updated_at: new Date(),
    });

    return null;
  }
}
