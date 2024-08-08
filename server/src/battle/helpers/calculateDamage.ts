// la fn calculateDamage está diseñada para calcular el daño que un Pokemon le hace
// a otro durante una batalla.
// Calculo del daño:
// # La fn intenta calcular el daño restando la defensa del defensor del ataque del atacante.
// # Si el valor resultante de atacante.attack - defensor.defense es mayor que 1, ese valor será el daño infligido.
// # Si el valor resultante es 0 o negativo
// (es decir, si la defensa del defensor es igual o mayor que el ataque del atacante),
// el daño se establece en 1 usando la función Math.max.
export const calculateDamage = (attacker: number, defender: number) => {
  return Math.max(1, attacker - defender);
};
