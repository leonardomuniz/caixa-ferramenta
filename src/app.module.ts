import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChinenigansModule } from './chinenigans/chinenigans.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './config/logging.interceptor';
import { HttpExceptionFilter } from './config/httpException.filter';

@Module({
  imports: [ChinenigansModule],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    AppService
  ],
})
export class AppModule { }
