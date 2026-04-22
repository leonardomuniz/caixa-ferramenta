import { Module } from '@nestjs/common';
import { ChinenigansService } from './chinenigans.service';
import { ChinenigansController } from './chinenigans.controller';

@Module({
  controllers: [ChinenigansController],
  providers: [ChinenigansService],
})
export class ChinenigansModule {}
