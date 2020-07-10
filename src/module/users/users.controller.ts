import { Controller, Get ,Put,Body,Param,Post,Delete,Res,Query} from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from './user.entity'
import { Response } from 'express';
interface UserDto{
  username:string
  password:string
  telegramUser:string
}
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Put('/updateuser/:id',)
  async update(@Param('id') id: number, @Body() updateUserDto: UserDto,@Res() res: Response) {
    await this.usersService.updateUser(id,updateUserDto)
    return res.redirect("/")
  }
  @Post('/adduser')
  async add(@Body() addUserDto: UserDto,@Res() res: Response) {
    await this.usersService.addUser(addUserDto)
    return res.redirect("/")
  }
  @Delete('/deleteuser')
  async remove(@Body() deleteUserDto: User,@Res() res: Response) {
    
    await this.usersService.removes(deleteUserDto)
    return res.redirect("/")
  }
}
