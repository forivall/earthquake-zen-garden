import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail/Detail.container';
import Index from '../pages/Index/Index.container';
import Profile from '../pages/Profile/Profile.container';

import { AppDataProps } from './App.types';
import AppContainer from './AppContainer';

const AppRouting: React.VFC<AppDataProps> = ({ data, err }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppContainer data={data} err={err} />}>
        <Route index element={<Index data={data} />} />
        <Route path="earthquake/:id" element={<Detail data={data} />}></Route>
        <Route path="profile" element={<Profile data={data} />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouting;
