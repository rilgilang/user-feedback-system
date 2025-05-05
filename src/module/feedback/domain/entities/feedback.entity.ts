enum FeedbackType {
  BUG_REPORT,
  Feature_REQUEST,
  GENERAL_FEEDBACK,
}

enum FeedbackStatus {
  PENDING,
  REVIEWED,
  RESOLVED,
}

export class FeedbackEntity {
  constructor(
    public readonly id: string,
    public userId: string,
    public title: string,
    public status: FeedbackStatus,
    public description: string,
    public type: FeedbackType,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
