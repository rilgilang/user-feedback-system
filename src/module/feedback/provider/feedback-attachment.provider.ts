import { Connection } from 'mongoose';
import { FeedbackAttachmentSchema } from '../../schemas/feedback-attachments.schema';

export const feedbackAttachmentProviders = [
  {
    provide: 'FEEDBACK_ATTACHMENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('feedback_attachment', FeedbackAttachmentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
