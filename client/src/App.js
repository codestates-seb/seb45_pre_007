import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isPC } from './utils/mediaQueryUtils';

const App = () => {
  const PC = isPC();

  const Mobile = isMobile();

  return (
    <>
      <div>{Mobile && <p>Mobile</p>}</div>
      <div>{PC && <p>PC</p>}</div>
    </>
  );
};

export default App;
