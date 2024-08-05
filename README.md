## Challenge
La aplicación es una batalla de Pokémon. Cada uno tiene diferentes stats, como ataque y defensa, por ejemplo, y tenemos que hacerlos batallar entre ellos.

## Objetivos de Backend

1. Implementar migraciones de DB, debe popularse una tabla con los datos de los Pokémon.
2. Implementar un endpoint para listar todos los Pokémon.
3. Implementar un endpoint para hacerlos batallar.
4. Guardar los resultados de las batallas en una tabla.

```
{
  "pokemon": [
    {
      "id": "pokemon-1",
      "name": "Pikachu",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 6,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    },
  ]
}
```

## Objetivos del Frontend

1. Implementar la UI/UX que liste y seleccione los Pokémon.
2. Implementar la Card del Pokémon que liste los stats.
3. Cuando se inicie la batalla, se debe escoger automáticamente y aleatoriamente un contrincante diferente y luego mostrar el resultado.
4. Implementar responsividad básica.
5. Conectar con el Backend.

## Diseño UI/UX
[![Design.png](https://i.postimg.cc/8kq3rRc2/Design.png)](https://postimg.cc/yWynMSFj)

## Algoritmo de Batalla

Para el cálculo de la batalla, ten en consideración lo siguiente:

- El Pokémon con la velocidad más alta hace el primer ataque; si son iguales, el Pokémon con el ataque más alto va primero.
- Para calcular el daño, resta la defensa del ataque (ataque - defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa, el daño es 1.
- El daño se resta del HP.
- Los Pokémon pelearán por turnos. Todos los turnos serán calculados en el mismo request. Por eso el endpoint debe retornar la data del ganador en la misma llamada.
- El ganador es el que reste el HP del enemigo a cero.
- NOTA: como adicional se podría implementar el sistema de tipos, pero no es requerido.

## Tecnología a Usar

**Backend:**
- NestJS
- TypeORM
- SQLite

**Frontend:**
- React
- MaterialUI

## Modo de Entrega

El código se debe entregar en un repositorio público para ser revisado. Por favor, adicionar un README con instrucciones.

## Project Structure
```
root/
├── client/ # All frontend-related files
├── server/ # All backend-related files
└── README.md # Project description and instructions
```

## Instrucciones para Ejecutar el Proyecto

1. **Clona el repositorio:**
   ```bash
   git clone <URL del repositorio>
#### Backend:
2. Ve al directorio del backend: `cd server`
3. Instala las dependencias: `npm i`
4. Clonar el archivo `.env.template` y renombrarlo por `.env`
5. Actualizar las variables de entorno.
6. Inicia la aplicación:
   `npm run start:dev`
#### Frontend:
1. Ve al directorio del frontend: `cd client`
2. Instala las dependencias: `npm i`
3. Inicia la aplicación:`npm run dev` 