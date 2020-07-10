import { Telegraf } from 'telegraf'

 export const bot = new Telegraf("1133397786:AAGKFMMS1HYOvF4zQHypIdgbxRhAKpefgYo")
/**
   * Untuk mengirim pesan ke user atau channel.
   * @param chatId chat id dari username channel atau chat id user
   * @param message pesan yang mau di kirim
   * @example
   * sendMessage(chatId, message)
   */
export function sendMessage(chatId:string|number,message:string):void{
    bot.telegram.sendMessage(chatId,message)
}
