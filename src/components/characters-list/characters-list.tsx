import React from 'react';
import { useGetCharactersQuery } from '../../services/characters-service';
import { SearchPanel } from '../search-panel';
import { Loader } from '../loader';
import { Box, Grid } from '@mui/material';
import { CharactersItem } from '../characters-item';
import { useDebounce } from '../../hooks/use-debounce';
import { Pagination } from '../pagination';
import { ErrorPlate } from '../error-plate';
import { useDispatch, useSelector } from 'react-redux';
import { setTerm } from '../../store/reducers/search-term-slice';
import { type ApplicationState } from '../../store';
import { setPage } from '../../store/reducers/page-slice';

export const CharactersList = () => {
  const { term } = useSelector((state: ApplicationState) => state.searchTerm);
  const { page } = useSelector((state: ApplicationState) => state.page);
  const dispatch = useDispatch();
  const search = useDebounce(term, 300);
  const { currentData, isFetching, isError } = useGetCharactersQuery({ page, search });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlate />;
  }

  const pageChangeHandler = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const searchPanelChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (page !== 1) {
      pageChangeHandler(1);
    }

    dispatch(setTerm(event.target.value));
  };

  const characters = currentData?.results.map((character) => (
        <Grid item xs={12} sm={6} key={character.url}>
            <CharactersItem character={character} />
        </Grid>
  ));

  const pageCount = Math.ceil((currentData?.count as number) / 10);

  return (
        <>
            <SearchPanel
                value={term}
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
                        onChange={pageChangeHandler}
                    />
                </Box>
            )}
        </>
  );
};
