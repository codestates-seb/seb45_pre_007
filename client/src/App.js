import Main from './pages/Main.jsx';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header.jsx';
import { Login } from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import Ask from './pages/Ask.jsx';
import Sign from './pages/Sign.jsx';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ask" element={<Ask />}></Route>
          <Route path="/signup" element={<Sign />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
