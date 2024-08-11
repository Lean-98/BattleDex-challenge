import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from '../pokemon/pokemon.module';
import { BattleModule } from '../battle/battle.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, BattleModule],
})
export class SeedModule {}
