import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';




@Module({
  imports: [],
  providers: [TelegramService],
  controllers: [TelegramController],
  exports: [TelegramService]
})
export class TelegramModule {}