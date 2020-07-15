import { Injectable,OnModuleInit } from '@nestjs/common';
import {ConfigService} from "@nestjs/config"
import { Telegraf } from 'telegraf'


@Injectable()
export class TelegramService implements OnModuleInit{
  constructor(private configService: ConfigService) {}
  private token=this.configService.get<string>('TELEGRAM_TOKEN');;
  public bot = new Telegraf(this.token)
  
  sendMessage(chatId:string|number,message:string):void{
      this.bot.telegram.sendMessage(chatId,message)
  }    
  
  onModuleInit() {
    console.log(`Initialization... telegram`);
   
    this.bot.on('text', (ctx) => {
      console.log(ctx.update.message.from.id)
          ctx.reply("id "+ctx.update.message.from.id+" username "+ctx.update.message.from.username)
    })
    this.bot.launch()
  }
  
}