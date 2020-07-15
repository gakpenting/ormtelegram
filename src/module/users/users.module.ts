import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { TelegramModule } from '../telegram/telegram.module';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { UsersSubscriber } from './user.subscriber';



@Module({
  imports: [TypeOrmModule.forFeature([User]),TelegramModule],
  providers: [UsersService,UsersSubscriber],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}