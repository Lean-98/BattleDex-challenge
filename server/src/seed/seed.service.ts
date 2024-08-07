import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonService } from '../pokemon/pokemon.service';
import { Category } from '../pokemon/entities/category.entity';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    @InjectRepository(Category)
    private readonly pokemonCategoryRepository: Repository<Category>,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertCategoriesAndPokemons();
    return 'Seed Executed!';
  }

  private async deleteTables() {
    await this.pokemonService.deleteAllPokemons();

    const queryBuilder = this.pokemonCategoryRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  private async insertCategoriesAndPokemons() {
    await this.pokemonService.deleteAllPokemons();

    const seedPokemons = initialData.pokemons;

    const insertPromises = [];

    seedPokemons.forEach((pokemon) => {
      insertPromises.push(this.pokemonService.create(pokemon));
    });

    await Promise.all(insertPromises);
  }
}
