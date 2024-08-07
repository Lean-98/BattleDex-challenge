import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from './category.entity';

@Entity({ name: 'pokemon' })
export class Pokemon {
  @ApiProperty({
    example: '51dcd3e6-18b4-4a71-8ee4-04b99b089f56',
    description: 'Pokemon ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Pikachu',
    description: 'Pokemon name',
    uniqueItems: true,
  })
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  name: string;

  @ApiProperty({
    example: 55,
    description: 'Attack power',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  attack: number;

  @ApiProperty({
    example: 40,
    description: 'Defense points',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  defense: number;

  @ApiProperty({
    example: 35,
    description: 'Health points',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  hp: number;

  @ApiProperty({
    example: 90,
    description: 'Speed points',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  speed: number;

  @ApiProperty({
    example:
      '"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"',
    description: 'Pokemon image URL',
  })
  @Column({
    type: 'text',
    nullable: false,
  })
  imageUrl: string;

  // Relations
  @OneToMany(() => Category, (category) => category.pokemons, {
    cascade: true,
  })
  categories: Category[];
}
