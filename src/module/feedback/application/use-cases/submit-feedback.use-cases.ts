import { FileUploaderService } from '../../domain/service/submit-feedback.service';

export class SubmitFeedbackUseCase {
  constructor(private readonly uploader: FileUploaderService) {}

  async execute(file: Express.Multer.File) {
    return this.uploader.upload(file);
  }
}
