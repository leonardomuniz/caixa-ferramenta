import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const className = context.getClass().name;
    const handlerName = context.getHandler().name;

    const startTime = Date.now();

    const { method, url } = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap((response) => {
        Logger.log({
          className,
          handlerName,
          method,
          url,
          statusCode: context.switchToHttp().getResponse().statusCode,
          responseTime: `${Date.now() - startTime}ms`,
          data: response?.data,
        });
      }),
    );
  }
}
