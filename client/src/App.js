import Main from './pages/Main.jsx';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header.jsx';
import { Login } from './pages/Login.jsx';
import Ask from './pages/Ask.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ask" element={<Ask />}></Route>
      </Routes>
    </>
  );
};

export default App;
