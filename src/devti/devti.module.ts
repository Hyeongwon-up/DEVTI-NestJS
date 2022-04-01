import { Module } from '@nestjs/common';
import { DevtiService } from './devti.service';
import { DevtiController } from './devti.controller';

@Module({
  controllers: [DevtiController],
  providers: [DevtiService]
})
export class DevtiModule {}
