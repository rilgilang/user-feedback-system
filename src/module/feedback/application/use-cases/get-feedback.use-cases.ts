import { FeedbackPostgresPrismaRepository } from '../../infrastructure/postgre/feedback.postgres.prisma.repository';
import { FeedbackAttachmentsMongoRepository } from '../../infrastructure/mongo/feedback-attachments.mongo.prisma.repository';
import { FeedbacksDto } from '../dto/paginated-feedbacks.dto';

export class GetFeedbackUseCase {
  constructor(
    private readonly feedbackRepository: FeedbackPostgresPrismaRepository,
    private readonly feedbackAttachmentRepository: FeedbackAttachmentsMongoRepository,
  ) {}

  async execute(
    sort: string,
    filter: string,
    q: string,
    type: string,
    page: number,
    per_page: number,
  ): Promise<FeedbacksDto> {
    const feedbacks = await this.feedbackRepository.findAllWithQuery(
      sort,
      filter,
      q,
      type,
      page,
      per_page,
    );

    const result = await Promise.all(
      feedbacks.map(async (feedback) => {
        feedback.status = feedback.status.toLowerCase();
        feedback.type = feedback.type.toLowerCase();

        const attachments = await this.feedbackAttachmentRepository.findById(
          feedback.id,
        );

        return {
          ...feedback,
          attachment: attachments?.attachment_link ?? [],
        };
      }),
    );

    const countFeedback = await this.feedbackRepository.findAllCount(
      sort,
      filter,
      q,
      type,
    );

    return new FeedbacksDto(result, countFeedback, page, per_page);
  }
}
