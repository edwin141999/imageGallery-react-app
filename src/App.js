import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const search = 'mexico'
const API_KEY = '8VzQ2kG2msZoLOMYZOSe6NsjcSXWNo5c'
const URLAPI = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10&offset=0&rating=g&lang=en`

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    fetch(URLAPI)
      .then(res => res.json())
      .then(response => {
        const { data = [] } = response
        const gif = data.map(image => image.images.downsized_medium.url)
        setGifs(gif)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <section className="App-header">
        <input />
        <button>Buscar</button>
        {
          gifs.map(images => <img alt='No hay imagen' src={images} />)
        }

      </section>
    </div>
  );
}

export default App;
