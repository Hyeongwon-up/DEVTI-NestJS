import { Test, TestingModule } from '@nestjs/testing';
import { DevtiService } from './devti.service';

describe('DevtiService', () => {
  let service: DevtiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevtiService],
    }).compile();

    service = module.get<DevtiService>(DevtiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
