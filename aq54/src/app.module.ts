import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalApiService } from './external-api/external-api.service';
import { StationRawDataEntity } from './entities/station-raw-data.entity';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'user',
      database: 'aq54db',
      entities: [StationRawDataEntity, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, StationRawDataEntity]),
    HttpModule,
  ],
  controllers: [UserController, AppController],
  providers: [ExternalApiService, AppService],
})
export class AppModule {}
