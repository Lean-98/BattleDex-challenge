import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Battle, Category, Pokemon } from './entities';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { CategoryType, type PokemonBattle } from './interfaces';
import { CreateBattleDto } from './dto/create-battle.dto';
import { calculateDamage, determineFirstAttacker } from './helpers';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger('PokemonService');

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      const { categories, ...rest } = createPokemonDto;

      // Crear nuevas categorías para el Pokemon
      const newCategories = categories.map((categoryName) =>
        this.categoryRepository.create({
          name: categoryName as CategoryType,
        }),
      );

      // Guardar las nuevas categorías en la DB
      await Promise.all(
        newCategories.map((category) => this.categoryRepository.save(category)),
      );

      // Crear Pokemon con las categorias asociadas
      const newPokemon = this.pokemonRepository.create({
        ...rest,
        categories: newCategories,
      });

      // Guardar pokemon en la DB
      await this.pokemonRepository.save(newPokemon);

      return newPokemon;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 5, offset = 0 } = paginationDto;
    try {
      const [pokemons, total] = await this.pokemonRepository.findAndCount({
        take: limit,
        skip: offset,
        relations: {
          categories: true,
        },
      });

      const formattedPokemons = pokemons.map((product) => ({
        ...product,
        categories: product.categories.map(({ id, name }) => ({
          id,
          name,
        })),
      }));

      return {
        data: formattedPokemons,
        total,
        limit,
        offset,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.pokemonRepository.findOne({
        where: { id },
        relations: {
          categories: true,
        },
      });

      if (!product) {
        throw new NotFoundException(`Pokemonn with id: ${id} not found`);
      }

      return product;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const { categories, ...rest } = updatePokemonDto;

      // Encontrar el Pokemon a actualizar
      const pokemon = await this.pokemonRepository.findOne({
        where: { id },
        relations: ['categories'],
      });

      if (!pokemon) {
        throw new NotFoundException('Pokemon not found');
      }

      // Actualizar el Pokemon con los datos proporcionados
      this.pokemonRepository.merge(pokemon, rest);

      if (categories) {
        // Eliminar las categorías anteriores
        pokemon.categories = [];

        // Crear nuevas categorías para el Pokemon
        const newCategories = categories.map((categoryName) =>
          this.categoryRepository.create({
            name: categoryName as CategoryType,
          }),
        );

        // Guardar las nuevas categorías en la DB
        await Promise.all(
          newCategories.map((category) =>
            this.categoryRepository.save(category),
          ),
        );

        // Asociar las nuevas categorías al Pokémon
        pokemon.categories = newCategories;
      }

      // Guardar el Pokemon actualizado en la DB
      await this.pokemonRepository.save(pokemon);

      return pokemon;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const { affected } = await this.pokemonRepository.delete(id);
      if (affected === 0) {
        throw new NotFoundException(`Pokemon not found for id: ${id}`);
      }
      return { id, message: 'Pokemon was deleted successfully.' };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async deleteAllCategories() {
    const query = this.dataSource.createQueryBuilder();
    try {
      await query.delete().from('categories').execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async deleteAllPokemons() {
    const query = this.dataSource.createQueryBuilder();
    try {
      await query.delete().from('pokemon').execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error instanceof NotFoundException) {
      throw new NotFoundException(error.message);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  async battle(createBattleDto: CreateBattleDto) {
    const { pokemonOneId, pokemonTwoId } = createBattleDto;

    // Query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const pokemonOne = await queryRunner.manager.findOne(Pokemon, {
        where: { id: pokemonOneId },
      });
      const pokemonTwo = await queryRunner.manager.findOne(Pokemon, {
        where: { id: pokemonTwoId },
      });

      if (!pokemonOne || !pokemonTwo) {
        throw new NotFoundException('Pokemon not found');
      }

      const firstAttacker = determineFirstAttacker(pokemonOne, pokemonTwo);
      const secondAttacker =
        firstAttacker === pokemonOne ? pokemonTwo : pokemonOne;

      let hpFirstAttacker: number = pokemonOne.hp;
      let hpSecondAttacker: number = pokemonTwo.hp;
      let pokemonWinner: PokemonBattle;

      // Simulación de batalla
      while (hpFirstAttacker > 0 && hpSecondAttacker > 0) {
        hpFirstAttacker -= calculateDamage(
          secondAttacker.attack,
          firstAttacker.defense,
        );
        if (hpFirstAttacker <= 0) {
          pokemonWinner = secondAttacker;
          break; // salir del ciclo
        }

        hpSecondAttacker -= calculateDamage(
          firstAttacker.attack,
          secondAttacker.defense,
        );
        if (hpSecondAttacker <= 0) {
          pokemonWinner = firstAttacker;
          break;
        }
      }

      if (!pokemonWinner) {
        throw new NotFoundException('No winner determined in the battle');
      }

      const battle = this.battleRepository.create({
        pokemonOneId,
        pokemonTwoId,
        winnerId: pokemonWinner.id,
        pokemonOneHp: hpFirstAttacker,
        pokemonTwoHp: hpSecondAttacker,
        timestamp: new Date(),
      });

      await queryRunner.manager.save(battle);
      await queryRunner.commitTransaction();

      return {
        pokemonWinner,
        message: `The winner is ${pokemonWinner.name}`,
      };
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBExceptions(error);
    }
  }

  async deleteAllBattles() {
    const query = this.dataSource.createQueryBuilder();
    try {
      await query.delete().from('battle').execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
