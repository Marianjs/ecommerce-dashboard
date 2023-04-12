import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './containers/login';
import MainPage from './containers/main';

function App() {
  return (
   <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route exact path="/main" element={<MainPage />} />
   </Routes>
  );
}

export default App;
