import { z } from 'zod';

export const SubmitFeedbackSchema = z.object({
  title: z.string().min(1),
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
  description: z.string().min(5),
  type: z.enum(['BUG_REPORT', 'FEATURE_REQUEST', 'GENERAL_FEEDBACK']),
});
