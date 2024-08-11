import { PartialType } from '@nestjs/swagger';
import { CreatePokemonResponseDto } from './create-pokemon-response.dto';

export class UpdatePokemonResponseDto extends PartialType(
  CreatePokemonResponseDto,
) {}
