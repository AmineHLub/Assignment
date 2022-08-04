/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Thumbnail from './Components/Thumbnail';
import ImageDiaporama from './Components/ImageDiaporama';

function App() {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setData(res.data.slice(0, 6));
    }).catch((err) => {
      // way to catch errors
    });
  }, []);

  return (
    <div className="App">
      <h1 className="header">MASTER WiZR Modules</h1>
      {
        data.length > 0 && (
          <>
            <Thumbnail
              data={data}
              setCurrentImageIndex={setCurrentImageIndex}
              currentImageIndex={currentImageIndex}
            />
            <ImageDiaporama
              currentImageIndex={currentImageIndex}
              data={data}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          </>
        )
      }
    </div>
  );
}

export default App;
