<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## RESTful API - BattleDex

### TechStack: Nest.js TypeScript Sqlite TypeORM

## Used Packages

`@nestjs/common`
`@nestjs/config`
`@nestjs/core`
`@nestjs/mapped-types`
`@nestjs/platform-express`
`@nestjs/swagger`
`@nestjs/typeorm`
`class-transformer`
`class-validator`
`joi`
`reflect-metadata`
`rxjs`
`sqlite3`
`typeorm`
`uuid`

## Implementaciones Adicionales en el Backend

1. **Documentación con Swagger**: Todos los endpoints, DTOs, entities y respuestas están documentados usando Swagger.
2. **Paginación**: Implementación de paginación en las búsquedas de Pokémons y de registros de batallas.
3. **Decorador para Manejo de Respuestas**: Creación de un decorador para estandarizar y simplificar la gestión de respuestas en los endpoints.
4. **CRUD en la Entity Pokémon**: Métodos completos de CRUD para gestionar los registros de Pokémon.
5. **Relaciones entre Pokémon y Categories**: Establecimiento de relaciones de 1 a N entre Pokémon y Categories, con métodos para eliminar registros.
6. **Módulo de Batalla**: Métodos para crear, buscar y eliminar registros de batallas entre Pokémon.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Instrucciones para Ejecutar el Proyecto

1. Instala las dependencias: `npm i`
2. Clonar el archivo `.env.template` y renombrarlo por `.env`
3. Actualizar las variables de entorno.
4. Inicia la aplicación:
   `npm run start:dev`
5. Accede a la documentación de Swagger en: http://localhost:3000/api
