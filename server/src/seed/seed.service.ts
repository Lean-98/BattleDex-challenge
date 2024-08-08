import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PokemonService } from '../pokemon/pokemon.service';
import { initialData } from './data/seed-data';
import { BattleService } from '../battle/battle.service';

@Injectable()
export class SeedService {
  private readonly logger = new Logger('SeedService');
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly battleService: BattleService,
  ) {}

  async runSeed() {
    try {
      this.logger.log('Starting seed process...');
      await this.deleteTables();
      await this.insertCategoriesAndPokemons();
      this.logger.log('Seed process completed successfully.');
      return 'Seed Executed!';
    } catch (error) {
      this.logger.log('Error during seed process:', error);
      throw new InternalServerErrorException('Seed process failed.');
    }
  }

  private async deleteTables() {
    this.logger.log('Deleting all tables...');
    await this.pokemonService.deleteAllCategories();
    await this.battleService.deleteAllBattles();
    await this.pokemonService.deleteAllPokemons();
    this.logger.log('All tables deleted.');
  }

  private async insertCategoriesAndPokemons() {
    this.logger.log('Inserting categories and pokemons...');
    const seedPokemons = initialData.pokemons;

    const insertPromises = seedPokemons.map((pokemon) => {
      this.pokemonService.create(pokemon);
    });

    await Promise.all(insertPromises);
    this.logger.log('Categories and pokemons inserted');
  }
}
