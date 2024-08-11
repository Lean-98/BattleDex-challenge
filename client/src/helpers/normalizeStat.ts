export const MAX_STAT = 200;

// Normaliza los valores de las stats para ajustarlos en el rango de 1-MAX-STAT
export const normalizeStat = (stat: number) => {
  return Math.min(Math.max(stat, 1), MAX_STAT);
};
