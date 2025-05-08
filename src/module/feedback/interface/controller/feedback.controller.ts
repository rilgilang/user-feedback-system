import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SubmitFeedbackUseCase } from '../../application/use-cases/submit-feedback.use-cases';
import { SubmitFeedbackSchema } from '../validator/submit-feedback.schema';
import { FeedbackEntity } from '../../domain/entities/feedback.entity';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackAttachmentEntity } from '../../domain/entities/feedback-attachment.entity';
import { GetFeedbackUseCase } from '../../application/use-cases/get-feedback.use-cases';
import { QueryGetFeedbackSchema } from '../validator/get-feedback.schema.validation';

@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly submitFeedbackUseCase: SubmitFeedbackUseCase,
    private readonly getFeedbackUseCase: GetFeedbackUseCase,
  ) {}

  @Post('submit')
  @UseInterceptors(FilesInterceptor('file'))
  submitFeedback(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: any,
  ) {
    const parseResult = SubmitFeedbackSchema.safeParse(body);
    if (!parseResult.success) {
      throw new BadRequestException(parseResult.error.flatten());
    }

    const feedbackId = uuidv4();

    this.submitFeedbackUseCase.execute(
      files,
      new FeedbackEntity(
        feedbackId,
        '72796b20-1cb8-4ffd-a4c0-3d41d49e7165',
        body.title,
        body.status,
        body.description,
        body.type,
        new Date(),
        new Date(),
      ),
      new FeedbackAttachmentEntity(
        uuidv4(),
        feedbackId,
        ['', 'lodon'],
        new Date(),
        new Date(),
      ),
    );
    return {
      filename1: files[0].filename,
      filename2: files[1].filename,
    };
  }

  @Get('')
  async getAllFeedback(@Query() query: any) {
    const parseResult = QueryGetFeedbackSchema.safeParse(query);

    if (!parseResult.success) {
      throw new BadRequestException(parseResult.error.flatten());
    }

    const { sort, filter, q, type, page, per_page } = query;

    const feedback = await this.getFeedbackUseCase.execute(
      sort ? sort : 'desc',
      filter ? filter : '',
      q ? q : '',
      type ? type : 'bug_report',
      page ? Number(page) : 1,
      per_page ? Number(per_page) : 10,
    );
    return feedback;
  }
}
