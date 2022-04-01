import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtiController } from './devti/devti.controller';
import { DevtiModule } from './devti/devti.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [DevtiModule, AnswerModule],
  controllers: [AppController, DevtiController],
  providers: [AppService],
})
export class AppModule {}
