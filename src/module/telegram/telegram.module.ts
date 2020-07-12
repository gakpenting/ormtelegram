import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';

import { TelegramLib } from '../../lib/telegram';


@Module({
  imports: [],
  providers: [TelegramService,TelegramLib],
  controllers: [TelegramController],
  exports: [TelegramService]
})
export class TelegramModule {}