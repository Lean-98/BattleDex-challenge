import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Category } from './entities/category.entity';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Category])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonModule, PokemonService],
})
export class PokemonModule {}
