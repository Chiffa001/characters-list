import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from '../../store';
import { CharactersList } from '../characters-list';

export const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CharactersList />} />
                <Route path="*" element={<CharactersList/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
  );
};
