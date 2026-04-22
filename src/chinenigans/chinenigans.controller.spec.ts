import { Test, TestingModule } from '@nestjs/testing';
import { ChinenigansController } from './chinenigans.controller';
import { ChinenigansService } from './chinenigans.service';

describe('ChinenigansController', () => {
  let controller: ChinenigansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChinenigansController],
      providers: [ChinenigansService],
    }).compile();

    controller = module.get<ChinenigansController>(ChinenigansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
