export class FeedbackAttachmentEntity {
  constructor(
    public readonly id: string,
    public feedback_id: string,
    public attachment_link: string[],
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
