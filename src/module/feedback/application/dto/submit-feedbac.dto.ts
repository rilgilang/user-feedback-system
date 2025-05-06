export class SubmitFeedbackDto {
  user_id: string;
  title: string;
  description: string;
  type: string;
  file: Express.Multer.File[];
}
