import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChinenigansModule } from './chinenigans/chinenigans.module';

@Module({
  imports: [ChinenigansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
