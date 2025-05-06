import { Injectable } from '@nestjs/common';
import { SubmitFeedbackService } from '../../domain/service/submit-feedback.service';
import { FeedbackRepository } from '../../domain/repositories/feedback.repository.interface';
import { FeedbackEntity } from '../../domain/entities/feedback.entity';
import { FeedbackPostgresPrismaRepository } from '../../infrastructure/postgre/feedback.postgres.prisma.repository';

@Injectable()
export class SubmitFeedbackUseCase {
  constructor(
    private readonly uploader: SubmitFeedbackService,
    private readonly feedbackRepository: FeedbackPostgresPrismaRepository,
  ) {}

  async execute(file: Express.Multer.File[], feedback: FeedbackEntity) {
    this.feedbackRepository.create(feedback);
    return this.uploader.upload(file);
  }
}
