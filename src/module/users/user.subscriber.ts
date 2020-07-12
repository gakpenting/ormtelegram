import { EventSubscriber,EntitySubscriberInterface,InsertEvent,UpdateEvent,RemoveEvent,Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import {User} from './user.entity'
import {UsersService} from './users.service'




@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
constructor(@InjectConnection() readonly connection: Connection,private usersService:UsersService){
  connection.subscribers.push(this);
  
}
   
    listenTo() {
        return User;
    }
    
    
    async afterInsert(event: InsertEvent<User>) {
      this.usersService.sendMessageToUser(`AFTER USER INSERTED: ${JSON.stringify(event.entity)}`);
              console.log(`AFTER USER INSERTED: `, event.entity);
        
    }
    async afterUpdate(event: UpdateEvent<User>) {
      this.usersService.sendMessageToUser(`AFTER USER UPDATED: ${JSON.stringify(event.entity)}`);
      
      console.log(`AFTER USER UPDATED: `, event.entity);
  }
  async beforeRemove(event: RemoveEvent<User>) {
    this.usersService.sendMessageToUser(`AFTER USER REMOVED: ${JSON.stringify(event.entity)}`);
    
    console.log(`AFTER USER REMOVED: `, event.entity);
}

}