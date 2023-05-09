import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from '../../store';
import { CssBaseline } from '@mui/material';
import { MainPage } from '../../pages/main-page';

export const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path="*" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
  );
};
