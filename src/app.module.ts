import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramLib } from './lib/telegram';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './module/users/user.entity';
import { UsersModule } from './module/users/users.module';
import { UsersSubscriber } from './module/users/user.subscriber';
import {Routes,RouterModule} from 'nest-router'


const routes: Routes = [
  {
    path: '/api/v1/',
    module: UsersModule,
    
  },
];
@Module({
  imports: [TypeOrmModule.forRoot({
      type: "sqlite",
    database: `../data/telegram.sqlite`,
    entities: [User],
    synchronize: true,
  }),RouterModule.forRoutes(routes),UsersModule],
  controllers: [AppController],
  providers: [AppService,TelegramLib],

})
export class AppModule {}
