import { useState } from 'react';

export const usePokemonPagination = (
  initialPage: number = 0,
  itemsPerPage: number = 5,
) => {
  const [page, setPage] = useState<number>(initialPage);
  const limit = itemsPerPage;
  const offset = page * limit;

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  return { page, limit, offset, handleChangePage };
};
