import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';
import {
  CreatePokemonDto,
  CreatePokemonResponseDto,
  DeletePokemonResponseDto,
  UpdatePokemonDto,
  UpdatePokemonResponseDto,
} from './dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { ApiCrudResponses } from '../common/decorators/apiCrudResponses.decorator';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiCrudResponses(CreatePokemonResponseDto, 'create', 'Pokemon')
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiCrudResponses(CreatePokemonDto, 'read', 'Pokemon', true)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pokemonService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiCrudResponses(CreatePokemonResponseDto, 'read', 'Pokemon')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonService.findOne(id);
  }

  @Patch(':id')
  @ApiCrudResponses(UpdatePokemonResponseDto, 'update', 'Pokemon')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @ApiCrudResponses(DeletePokemonResponseDto, 'delete', 'Pokemon')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
