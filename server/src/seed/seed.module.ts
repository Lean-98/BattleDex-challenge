import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from '../pokemon/pokemon.module';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Category } from '../pokemon/entities/category.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [TypeOrmModule.forFeature([Pokemon, Category]), PokemonModule],
})
export class SeedModule {}
