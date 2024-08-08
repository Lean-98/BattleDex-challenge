import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBattleDto {
  @ApiProperty({
    example: '036bb972-7fb3-4fe4-ac8f-31340103c8c3',
    description: 'ID of the first Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  @IsNotEmpty()
  pokemonOneId: string;

  @ApiProperty({
    example: 'd4e2f47d-cc34-4f9a-9b22-1fdc6d8722f3',
    description: 'ID of the second Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  @IsNotEmpty()
  pokemonTwoId: string;
}
