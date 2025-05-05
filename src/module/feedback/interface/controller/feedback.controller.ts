import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SubmitFeedbackUseCase } from '../../application/use-cases/submit-feedback.use-cases';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly submitFeedbackUseCase: SubmitFeedbackUseCase) {}

  @Post('submit')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // folder to store files
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  submitFeedback(@UploadedFile() file: Express.Multer.File) {
    this.submitFeedbackUseCase.execute(file);
    return {
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
    };
  }
}
