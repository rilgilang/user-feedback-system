import { FeedbackEntity } from '../entities/feedback.entity';

export interface FeedbackRepository {
  findAll(): Promise<FeedbackEntity[]>;
  findById(id: string): Promise<FeedbackEntity | null>;
  create(feedBack: FeedbackEntity): Promise<FeedbackEntity | null>;
}
