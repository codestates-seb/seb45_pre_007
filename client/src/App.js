import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/questions`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return <>{data}</>;
};

export default App;
