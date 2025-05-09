import { MessageBrokerPort } from 'src/port/message-broker.port';
import { FeedbackPostgresPrismaRepository } from '../../infrastructure/postgre/feedback.postgres.prisma.repository';
import { UserPrismaRepository } from 'src/module/user/infrastructure/postgres/user.postgres.prisma.repository';

export class SendFeedbackReminderUseCase {
  constructor(
    private readonly feedbackRepo: FeedbackPostgresPrismaRepository,
    private readonly userRepo: UserPrismaRepository,
    private readonly broker: MessageBrokerPort,
  ) {}

  async execute() {
    const users = await this.userRepo.findAll();

    const feedbacks = await this.feedbackRepo.findAll();

    users.forEach((user) => {
      const found = feedbacks.find((feedbacks) => {
        feedbacks.userId = user.id;
      });

      if (!found) {
        this.broker.publish('feedback_reminder', user.id);
        console.log('user id ==> ', user.id);
      }
    });
  }
}
