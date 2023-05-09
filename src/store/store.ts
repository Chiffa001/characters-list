import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { middleware, reducer, reducerPath } from '../services';

const rootReducer = combineReducers({
  [reducerPath]: reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
});
