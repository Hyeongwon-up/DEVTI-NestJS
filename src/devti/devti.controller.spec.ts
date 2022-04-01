import { Test, TestingModule } from '@nestjs/testing';
import { DevtiController } from './devti.controller';
import { DevtiService } from './devti.service';

describe('DevtiController', () => {
  let controller: DevtiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevtiController],
      providers: [DevtiService],
    }).compile();

    controller = module.get<DevtiController>(DevtiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
