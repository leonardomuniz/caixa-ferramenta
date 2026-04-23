import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './config/logging.interceptor';
import { ResponseInterceptor } from './config/response.interceptor';
import { HttpExceptionFilter } from './config/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  const config = new DocumentBuilder()
    .setTitle('Caixa Ferramenta')
    .setDescription('API de ferramentas')
    .setVersion('1.0')
    .addTag('tools')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
