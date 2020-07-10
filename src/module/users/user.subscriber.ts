import { EventSubscriber,EntitySubscriberInterface,InsertEvent,UpdateEvent,RemoveEvent,Connection } from 'typeorm';
import {User} from './user.entity'
import {sendMessage} from '../../lib/telegram'



@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {

   
    listenTo() {
        return User;
    }
    
    
    async afterInsert(event: InsertEvent<User>) {
      
      const res = await event.manager.getRepository(User).find();
      res.forEach(a=>{
        sendMessage(a.telegramUser,`AFTER USER INSERTED: ${JSON.stringify(event.entity)}` )
      })
        console.log(`AFTER USER INSERTED: `, event.entity);
        
    }
    async afterUpdate(event: UpdateEvent<User>) {
      const res = await event.manager.getRepository(User).find();
      res.forEach(a=>{
        sendMessage(a.telegramUser,`AFTER USER UPDATED: ${JSON.stringify(event.entity)}` )
      })
      console.log(`AFTER USER UPDATED: `, event.entity);
  }
  async beforeRemove(event: RemoveEvent<User>) {
    const res = await event.manager.getRepository(User).find();

    // const res=await this.usersRepository.find()
    res.forEach(a=>{
      sendMessage(a.telegramUser,`AFTER USER REMOVED: ${JSON.stringify(event.entity)}` )
    })
    console.log(`AFTER USER REMOVED: `, event.entity);
}

}