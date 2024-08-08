import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BattleService } from './battle.service';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { ApiCrudResponses } from '../common/decorators/apiCrudResponses.decorator';
import { BattlesResponseDto, WinnerResponseDto, CreateBattleDto } from './dto';

@ApiTags('Battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  @ApiCrudResponses(WinnerResponseDto, 'create', 'Pokemon')
  async createBattle(@Body() createBattleDto: CreateBattleDto) {
    return this.battleService.battle(createBattleDto);
  }

  @Get()
  @ApiCrudResponses(BattlesResponseDto, 'create', 'Pokemon')
  findAllBattles(@Query() paginationDto: PaginationDto) {
    return this.battleService.findAllBattles(paginationDto);
  }
}
