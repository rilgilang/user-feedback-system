import { FeedbackEntity } from '../../domain/entities/feedback.entity';

export class FeedbacksDto {
  data: any;
  meta: {
    total: number;
    page: number;
    perPage: number;
  };

  constructor(data: any, total: number, page: number, perPage: number) {
    this.data = data;
    this.meta = { total, page, perPage };
  }
}
