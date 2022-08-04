/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Thumbnail from './Components/Thumbnail';
import ImageDiaporama from './Components/ImageDiaporama';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setData(res.data.slice(0, 6));
    }).catch((err) => {
      console.error(err, 'uncauhgt');
    });
  }, []);

  return (
    <div className="App">
      <h1>MASTER WiZR Modules</h1>
      <Thumbnail />
      <ImageDiaporama />
    </div>
  );
}

export default App;
