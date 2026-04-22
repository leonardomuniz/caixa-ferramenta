import { Test, TestingModule } from '@nestjs/testing';
import { ChinenigansService } from './chinenigans.service';

describe('ChinenigansService', () => {
  let service: ChinenigansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChinenigansService],
    }).compile();

    service = module.get<ChinenigansService>(ChinenigansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
