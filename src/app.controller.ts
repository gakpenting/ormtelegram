import { Get, Controller, Render} from '@nestjs/common';
import { UsersService } from './module/users/users.service';

@Controller()
export class AppController {
  constructor(private usersService:UsersService){}
  @Get()
  @Render('index')
 async root() {
    const users=await this.usersService.findAll();
    return { users };
  }
  
}