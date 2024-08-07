import { ApiProperty } from '@nestjs/swagger';

export class DeletePokemonResponseDto {
  @ApiProperty({
    example: '423de807-a661-4fd8-99de-4d910cfb8d20',
    description: 'ID of the deleted Pokemon',
  })
  id: string;

  @ApiProperty({
    example: 'Pokemon was deleted successfully.',
    description: 'Confirmation message',
  })
  message: string;
}
