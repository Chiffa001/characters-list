import { apiSlice } from '.';
import { type Character, type CharacterResponse } from '../types/character';

const CHARACTER_TAG_NAME = 'character';

const charactersService = apiSlice.enhanceEndpoints({
  addTagTypes: [CHARACTER_TAG_NAME]
}).injectEndpoints({
  endpoints: builder => ({
    getCharacters: builder.query<CharacterResponse, {
      page: number
      search?: string
    }>({
      query: ({ page, search = '' }) => ({
        url: '/people',
        params: {
          format: 'json',
          page,
          search
        }
      })
    }),
    getOneCharacter: builder.query<Character, number>({
      query: (id) => ({
        url: `/people/${id}`,
        params: {
          format: 'json'
        }
      })
    })
  })
});

export const { useGetCharactersQuery, useGetOneCharacterQuery, endpoints } = charactersService;
