import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BattleService } from './battle.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBattleDto } from './dto/create-battle.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@ApiTags('Battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async createBattle(@Body() createBattleDto: CreateBattleDto) {
    return this.battleService.battle(createBattleDto);
  }

  @Get()
  findAllBattles(@Query() paginationDto: PaginationDto) {
    return this.battleService.findAllBattles(paginationDto);
  }
}
