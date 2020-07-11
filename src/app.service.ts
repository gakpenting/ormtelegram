import { Injectable ,OnModuleInit} from '@nestjs/common';
import { TelegramLib } from './lib/telegram';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private telegramLib:TelegramLib){}
  onModuleInit() {
    console.log(`Initialization... telegram`);
    this.telegramLib.bot.on('text', (ctx) => {
      console.log(ctx.update.message.from.id)
          ctx.reply("id "+ctx.update.message.from.id+" username "+ctx.update.message.from.username)
    })
    this.telegramLib.bot.launch()
  }
}
