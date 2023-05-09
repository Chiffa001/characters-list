import React from 'react';
import { Wrapper } from '../../components/wrapper';
import { CharactersDetails } from '../../components/characters-details';
import { useParams } from 'react-router';

export const DetailsPage = () => {
  const { id } = useParams();

  return (
        <Wrapper maxWidth='md'>
            <CharactersDetails id={id as string} />
        </Wrapper>
  );
};
