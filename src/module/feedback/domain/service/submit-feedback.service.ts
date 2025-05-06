import { Injectable } from '@nestjs/common';
import path from 'path';

@Injectable()
export class SubmitFeedbackService {
  upload(file: Express.Multer.File[]) {
    // your actual upload logic here
    return 'uploaded-url-or-result';
  }
}
