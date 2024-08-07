import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from '../pokemon/pokemon.module';
import { Category, Pokemon } from '../pokemon/entities';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [TypeOrmModule.forFeature([Pokemon, Category]), PokemonModule],
})
export class SeedModule {}
