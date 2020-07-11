import { Telegraf } from 'telegraf'
import { Injectable } from '@nestjs/common';
@Injectable()
export class TelegramLib {
    public token="";
    public bot = new Telegraf(this.token)
    
    sendMessage(chatId:string|number,message:string):void{
        this.bot.telegram.sendMessage(chatId,message)
    }    
    
  }