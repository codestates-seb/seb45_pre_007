import Main from './pages/Main.jsx';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </>
  );
};

export default App;
