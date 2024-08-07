import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities/pokemon.entity';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryType } from './interfaces';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger('PokemonService');

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
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

  async findAll() {
    try {
      const pokemons = await this.pokemonRepository.find({
        relations: {
          categories: true,
        },
      });

      return pokemons.map((product) => ({
        ...product,
        categories: product.categories.map(({ id, name }) => ({
          id,
          name,
        })),
      }));
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
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async deleteAllPokemons() {
    const query = this.pokemonRepository.createQueryBuilder('pokemons');
    try {
      return await query.delete().where({}).execute();
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
}
