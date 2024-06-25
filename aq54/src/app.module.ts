// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalApiService } from './external-api/external-api.service';
import { StationRawDataEntity } from './entities/station-raw-data.entity'; // Importez votre entité
import { User } from './entities/user.entity';
import { UserController} from './controllers/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'user',
      database: 'aq54db',
      entities: [StationRawDataEntity,User], // Ajoutez votre entité ici
      synchronize: true, // À utiliser uniquement en développement, pas en production
    }),
    TypeOrmModule.forFeature([User,StationRawDataEntity]),
  ],
  controllers: [UserController],
  providers: [ExternalApiService],
})
export class AppModule {}
