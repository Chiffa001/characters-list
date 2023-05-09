import React, { type FC } from 'react';
import { useGetOneCharacterQuery } from '../../services/characters-service';
import { Loader } from '../loader';
import { ErrorPlate } from '../error-plate';
import { CharactersItem } from '../characters-item';
import { type Character } from '../../types/character';

type Props = {
  id: string
};

export const CharactersDetails: FC<Props> = ({ id }) => {
  const { isLoading, isError, data } = useGetOneCharacterQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPlate />;
  }

  return <CharactersItem character={data as Character} details={true} />;
};
