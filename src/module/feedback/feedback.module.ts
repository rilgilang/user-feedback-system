import { Module } from '@nestjs/common';
import { FeedbackController } from './interface/controller/feedback.controller';
import { SubmitFeedbackService } from './domain/service/submit-feedback.service';
import { SubmitFeedbackUseCase } from './application/use-cases/submit-feedback.use-cases';
import { FeedbackPostgresPrismaRepository } from './infrastructure/postgre/feedback.postgres.prisma.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FeedbackAttachment,
  FeedbackAttachmentSchema,
} from '../schemas/feedback-attachments.schema';
import { FeedbackAttachmentsMongoRepository } from './infrastructure/mongo/feedback-attachments.mongo.prisma.repository';
import { GetFeedbackUseCase } from './application/use-cases/get-feedback.use-cases';
import { SendFeedbackReminderUseCase } from './application/use-cases/send-feedback-reminder.use-cases';
import { RabbitMQAdapter } from 'src/infrastructure/message-broker/rabbitmq.adapter';
import { MESSAGE_BROKER_PORT } from 'src/port/message-broker.port';
import { UserPrismaRepository } from '../user/infrastructure/postgres/user.postgres.prisma.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedbackAttachment.name, schema: FeedbackAttachmentSchema },
    ]),
  ],
  controllers: [FeedbackController],
  providers: [
    SubmitFeedbackUseCase,
    GetFeedbackUseCase,
    SubmitFeedbackService,
    FeedbackPostgresPrismaRepository,
    FeedbackAttachmentsMongoRepository,
    UserPrismaRepository,
    {
      provide: MESSAGE_BROKER_PORT,
      useClass: RabbitMQAdapter,
    },
    {
      provide: SendFeedbackReminderUseCase,
      useFactory: (broker: RabbitMQAdapter) =>
        new SendFeedbackReminderUseCase(
          FeedbackPostgresPrismaRepository,
          UserPrismaRepository,
          broker,
        ),
      inject: [MESSAGE_BROKER_PORT],
    },
  ],
  exports: [FeedbackPostgresPrismaRepository, SendFeedbackReminderUseCase],
})
export class FeedbackModule {}
