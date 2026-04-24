import { Module } from '@nestjs/common';
import { ChinenigansService } from './chinenigans.service';
import { ChinenigansController } from './chinenigans.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  controllers: [ChinenigansController],
  providers: [ChinenigansService],
})
export class ChinenigansModule { }
