import { FeedbackAttachmentEntity } from './feedback-attachment.entity';

export class FeedbackEntity {
  constructor(
    public readonly id: string,
    public userId: string,
    public title: string,
    public status: string,
    public description: string,
    public type: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
