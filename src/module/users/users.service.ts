import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { TelegramService } from '../telegram/telegram.service';

interface UserDto{
  username:string
  password:string
  telegramUser:string
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private telegramService:TelegramService
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async removes(users: User): Promise<void> {
    const user = await this.usersRepository.preload(users);
    await this.usersRepository.remove(user);
  }
  async addUser({username,password,telegramUser}:UserDto): Promise<void> {
    const user = await this.usersRepository.create({username,password,telegramUser});
    await this.usersRepository.save(user);
  }
  async updateUser(id: number,{username,password,telegramUser}:UserDto): Promise<void> {
    const user=await this.usersRepository.findOne(id);
    user.username=username;
    user.password=password;
    user.telegramUser=telegramUser;
    
    // const user = await this.usersRepository.create({id,username,password,telegramUser});
        await this.usersRepository.save(user);
  }
  async sendMessageToUser(message:string){
    const res = await this.findAll();
      res.forEach(a=>{
        this.telegramService.sendMessage(a.telegramUser,message )
      })
  }
}