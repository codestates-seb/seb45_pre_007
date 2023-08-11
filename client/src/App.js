import Main from './pages/Main.jsx';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  function handleEvent() {
    console.log('hello');
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <div onClick={handleEvent()}></div>
    </>
  );
};

export default App;
