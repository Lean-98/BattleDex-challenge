import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Battle, Category, Pokemon } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Category, Battle])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonModule, PokemonService],
})
export class PokemonModule {}
