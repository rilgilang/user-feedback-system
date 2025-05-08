import { z } from 'zod';

export const QueryGetFeedbackSchema = z.object({
  sort: z.string().optional(),
  filter: z.enum(['type', 'status', 'date']).optional(),
  q: z.string().optional(),
  type: z
    .enum(['BUG_REPORT', 'FEATURE_REQUEST', 'GENERAL_FEEDBACK'])
    .optional(),
  page: z.coerce.number().min(1).optional(),
  per_page: z.coerce.number().min(1).optional(),
});
