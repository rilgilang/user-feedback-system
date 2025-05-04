import { Injectable } from '@nestjs/common';
import { ZodOptionalType, ZodType } from 'zod';

@Injectable()
export class ValidationService {
  validate<T>(zodType: ZodType, data: T): T {
    return zodType.parse(data);
  }
}
