import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity({ name: 'categories' })
export class Category {
  @ApiProperty({
    example: 'fa3bbf4b-2c61-4a8c-8a8d-d8f71fda4a3b',
    description: 'Category ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Electric',
    description: 'Category name',
    uniqueItems: true,
  })
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  name: string;

  // Relations
  @ManyToOne(() => Pokemon, (pokemon) => pokemon.categories)
  pokemon: Pokemon;
}
