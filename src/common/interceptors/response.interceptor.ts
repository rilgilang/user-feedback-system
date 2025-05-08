import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: any) => {
        if (
          response &&
          typeof response === 'object' &&
          'data' in response &&
          'meta' in response
        ) {
          return {
            success: true,
            message: 'ok',
            data: response.data,
            meta: response.meta,
          };
        }

        return {
          success: true,
          message: 'ok',
          data: response,
        };
      }),
    );
  }
}
