import { FeedbackEntity } from '../entities/feedback.entity';

export interface FeedbackRepository {
  findAll(): Promise<FeedbackEntity[]>;
  findAllWithQuery(
    sort: string,
    filter: string,
    q: string,
    type: string,
    page: number,
    per_page: number,
  ): Promise<FeedbackEntity[]>;
  findAllCount(
    sort: string,
    filter: string,
    q: string,
    type: string,
  ): Promise<number>;
  findById(id: string): Promise<FeedbackEntity | null>;
  create(feedBack: FeedbackEntity): Promise<FeedbackEntity | null>;
}
