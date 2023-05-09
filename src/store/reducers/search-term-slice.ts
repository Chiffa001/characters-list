import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SearchTermState } from '../../types/state/search-term-state';

const initialState: SearchTermState = {
  term: ''
};

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setTerm (state, { payload }: PayloadAction<string>) {
      state.term = payload;
    }
  }
});

export const {
  reducer: searchTermReducer,
  actions: { setTerm },
  name: searchTermName
} = searchTermSlice;
