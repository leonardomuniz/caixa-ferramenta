import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export interface Response<T> {
    success: boolean
    data: T
    message?: string
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        return next
            .handle()
            .pipe(
                map((data: any) => {
                    const http = context.switchToHttp()
                    const response = http.getResponse()
                    const statusCode = response.statusCode

                    const success = statusCode >= 200 && statusCode < 300

                    const responseBody = {
                        success,
                        data: data?.payload !== undefined ? data.payload : data
                    }

                    if (data?.message) {
                        responseBody['message'] = data.message
                    }

                    return responseBody
                })
            )
    }
}