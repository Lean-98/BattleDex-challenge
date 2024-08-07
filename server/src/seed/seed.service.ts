import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonService } from '../pokemon/pokemon.service';
import { Category } from '../pokemon/entities';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  private readonly logger = new Logger('SeedService');
  constructor(
    private readonly pokemonService: PokemonService,
    @InjectRepository(Category)
    private readonly pokemonCategoryRepository: Repository<Category>,
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
    await this.pokemonService.deleteAllPokemons();

    const queryBuilder = this.pokemonCategoryRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
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
