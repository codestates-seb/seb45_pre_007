import { useEffect, useState, useRef } from 'react';

const useDetectClose = (initialState) => {
  const [isSelected, setSelected] = useState(initialState);
  const ref = useRef(null);

  const handleOnPress = () => {
    setSelected(!isSelected);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setSelected(!isSelected);
      }
    };

    if (isSelected) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isSelected]);

  return { handleOnPress, isSelected, ref };
};

export default useDetectClose;
