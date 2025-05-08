import { FeedbackEntity } from '../entities/feedback.entity';

export interface FeedbackRepository {
  findAllCount(
    sort: string,
    filter: string,
    q: string,
    type: string,
  ): Promise<number>;
  findAll(
    sort: string,
    filter: string,
    q: string,
    type: string,
    page: number,
    per_page: number,
  ): Promise<FeedbackEntity[]>;
  findById(id: string): Promise<FeedbackEntity | null>;
  create(feedBack: FeedbackEntity): Promise<FeedbackEntity | null>;
}
