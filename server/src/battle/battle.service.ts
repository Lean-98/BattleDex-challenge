import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';
import { Pokemon } from '../pokemon/entities';
import { CreateBattleDto } from './dto/create-battle.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { calculateDamage, determineFirstAttacker } from './helpers';
import type { PokemonBattle } from './interfaces/battle.interface';

@Injectable()
export class BattleService {
  private readonly logger = new Logger('BattleService');
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
    private readonly dataSource: DataSource,
  ) {}

  async battle(createBattleDto: CreateBattleDto) {
    const { selectedPokemonId, opponentPokemonId } = createBattleDto;

    // Query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const pokemonSelected = await queryRunner.manager.findOne(Pokemon, {
        where: { id: selectedPokemonId },
      });
      const pokemonOpponent = await queryRunner.manager.findOne(Pokemon, {
        where: { id: opponentPokemonId },
      });

      if (!pokemonSelected || !pokemonOpponent) {
        throw new NotFoundException('Pokemon not found');
      }

      const firstAttacker = determineFirstAttacker(
        pokemonSelected,
        pokemonOpponent,
      );
      const secondAttacker =
        firstAttacker === pokemonSelected ? pokemonOpponent : pokemonSelected;

      let hpFirstAttacker: number = pokemonSelected.hp;
      let hpSecondAttacker: number = pokemonOpponent.hp;
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
        selectedPokemonId,
        opponentPokemonId,
        winnerId: pokemonWinner.id,
        opponentPokemonHp: hpFirstAttacker,
        selectedPokemonHp: hpSecondAttacker,
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

  async findAllBattles(paginationDto: PaginationDto) {
    const { limit = 5, offset = 0 } = paginationDto;
    try {
      const [battles, total] = await this.battleRepository.findAndCount({
        take: limit,
        skip: offset,
      });

      return {
        data: { battles, total, limit, offset },
      };
    } catch (error) {
      console.log(error);
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
