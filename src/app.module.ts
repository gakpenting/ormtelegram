import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './module/users/user.entity';
import { UsersModule } from './module/users/users.module';
import {Routes,RouterModule} from 'nest-router'
import {UsersSubscriber} from './module/users/user.subscriber'
const routes: Routes = [
  {
    path: '/api/v1/',
    module: UsersModule,
    
  },
];
@Module({
  imports: [TypeOrmModule.forRoot({
    subscribers :[UsersSubscriber],
    type: "sqlite",
    database: `../data/telegram.sqlite`,
    entities: [User],
    synchronize: true,
  }),RouterModule.forRoutes(routes),UsersModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
