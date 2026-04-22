import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        const className = context.getClass().name
        const handlerName = context.getHandler().name
        Logger.log(`[${className}] - ${handlerName} - Start`)
        
        return next
            .handle()
            .pipe(
                tap(() => {
                    Logger.log(`[${className}] - ${handlerName} - Finish`)
                })
            )
    }

}