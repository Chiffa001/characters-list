import React, { type FC } from 'react';
import { Pagination as MuiPagination } from '@mui/material';

type Props = {
  currentPage: number
  count: number
  onChange: (value: number) => void
};

export const Pagination: FC<Props> = ({ currentPage, onChange, count }) => {
  const pageChangeHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return <MuiPagination size='small' count={count} page={currentPage} onChange={pageChangeHandler} />;
};
