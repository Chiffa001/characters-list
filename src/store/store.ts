import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { middleware, reducer, reducerPath } from '../services';
import { searchTermName, searchTermReducer } from './reducers/search-term-slice';
import { pageName, pageReducer } from './reducers/page-slice';

const rootReducer = combineReducers({
  [searchTermName]: searchTermReducer,
  [pageName]: pageReducer,
  [reducerPath]: reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
});

export type ApplicationState = ReturnType<typeof store.getState>;
