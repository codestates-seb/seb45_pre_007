// mediaQueryUtils.js
import { useMediaQuery } from 'react-responsive';

export const isPC = () => {
  return useMediaQuery({
    query: '(min-width:1024px)',
  });
};

export const isMobile = () => {
  return useMediaQuery({
    query: '(max-width:768px)',
  });
};
