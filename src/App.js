import { useState } from 'react';
import './App.css';

function App() {
  const [gifs, setGifs] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(false)
    const search = busqueda
    const API_KEY = '8VzQ2kG2msZoLOMYZOSe6NsjcSXWNo5c'
    const URLAPI = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10&offset=0&rating=g&lang=en`
    setTimeout(() => {
      fetch(URLAPI)
        .then(res => res.json())
        .then(response => {
          console.log(response);
          const { data = [] } = response
          const gif = data.map(image => image.images.downsized_medium.url)
          setGifs(gif)
        })
      setLoading(true)
    }, 100);
  }


  return (
    <div className="App">
      <section className="App-header">
        <input type='text' onChange={e => (setBusqueda(e.target.value))} />
        <button onClick={handleSubmit}>Buscar</button>
        {
          loading
            ?
            gifs.map(images => <img key={images} alt='No hay imagen' src={images} />)
            :
            <p>Loading</p>
        }
      </section>
    </div>
  );
}

export default App;
