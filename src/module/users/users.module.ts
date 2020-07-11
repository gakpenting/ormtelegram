import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { UsersSubscriber } from './user.subscriber';
import { TelegramLib } from '../../lib/telegram';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService,UsersSubscriber,TelegramLib],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}