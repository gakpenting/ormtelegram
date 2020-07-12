import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramLib } from './lib/telegram';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './module/users/user.entity';
import { UsersModule } from './module/users/users.module';
import { TelegramModule } from './module/telegram/telegram.module';
import {Routes,RouterModule} from 'nest-router'
import { ConfigModule } from '@nestjs/config';

const routes: Routes = [
  {
    path: '/api/v1/',
    module: UsersModule,
    
  },
];
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
      type: "sqlite",
    database: `../data/telegram.sqlite`,
    entities: [User],
    synchronize: true,
  }),RouterModule.forRoutes(routes),UsersModule,TelegramModule],
  controllers: [AppController],
  providers: [AppService,TelegramLib],

})
export class AppModule {}
