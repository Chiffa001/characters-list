import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type PageState } from '../../types/state/page-state';

const initialState: PageState = {
  page: 1
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage (state, { payload }: PayloadAction<number>) {
      state.page = payload;
    }
  }
});

export const {
  reducer: pageReducer,
  actions: { setPage },
  name: pageName
} = pageSlice;
