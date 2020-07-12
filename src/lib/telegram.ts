import { Telegraf } from 'telegraf'
import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config"
@Injectable()
export class TelegramLib {
    constructor(private configService: ConfigService) {}
    private token=this.configService.get<string>('TELEGRAM_TOKEN');;
    public bot = new Telegraf(this.token)
    
    sendMessage(chatId:string|number,message:string):void{
        this.bot.telegram.sendMessage(chatId,message)
    }    
    
  }