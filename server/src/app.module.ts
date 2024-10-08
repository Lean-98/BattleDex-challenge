import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfiguration } from './config/app.config';
import { JoiSchemaValidation } from './config/joi.schemaValidation';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiSchemaValidation,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get<string>('sqliteDb'),
        autoLoadEntities: true,
        synchronize: configService.get<string>('NODE_ENV') !== 'prod', // synchronize se establece en true solo si NODE_ENV no es 'prod'
      }),
    }),

    CommonModule,

    PokemonModule,

    SeedModule,

    BattleModule,
  ],
})
export class AppModule {}
