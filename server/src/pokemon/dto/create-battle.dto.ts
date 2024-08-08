import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBattleDto {
  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'ID of the first Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  @IsNotEmpty()
  pokemonOneId: string;

  @ApiProperty({
    example: '4559136e-f2a8-4d8a-a791-e618c8f661ec',
    description: 'ID of the second Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  @IsNotEmpty()
  pokemonTwoId: string;
}
