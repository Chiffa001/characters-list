import React, { useState } from 'react';
import { useGetCharactersQuery } from '../../services/characters-service';
import { SearchPanel } from '../search-panel';
import { Loader } from '../loader';
import { Box, Grid } from '@mui/material';
import { CharactersItem } from '../characters-item';
import { useDebounce } from '../../hooks/use-debounce';
import { Pagination } from '../pagination';
import { ErrorPlate } from '../error-plate';

export const CharactersList = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const search = useDebounce(searchTerm, 300);
  const { currentData, isFetching, isError } = useGetCharactersQuery({ page, search });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlate />;
  }

  const searchPanelChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (page !== 1) {
      setPage(1);
    }

    setSearchTerm(event.target.value);
  };

  const characters = currentData?.results.map((character) => (
        <Grid item xs={12} sm={6} md={4} key={character.url}>
            <CharactersItem character={character} />
        </Grid>
  ));

  const pageCount = Math.floor((currentData?.count as number) / 10);

  return (
        <>
            <SearchPanel
                value={searchTerm}
                onChange={searchPanelChangeHandler}
            />
            <Grid container={true} spacing={3} mt="0">
                {characters}
            </Grid>
            {pageCount > 1 && (
                <Box mt="1rem" display="flex" justifyContent="center">
                    <Pagination
                        count={pageCount}
                        currentPage={page}
                        onChange={setPage}
                    />
                </Box>
            )}
        </>
  );
};
