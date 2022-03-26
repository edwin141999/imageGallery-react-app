import { useState } from "react";
import GifPage from "./GifPage";
import './SearchPage.css';

function SearchPage() {

    const [gifs, setGifs] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [loading, setLoading] = useState(false)

    let message = null

    const handleSubmit = () => {
        setLoading(false)
        const search = busqueda
        const API_KEY = '8VzQ2kG2msZoLOMYZOSe6NsjcSXWNo5c'
        const URLAPI = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12&offset=0&rating=g&lang=en`
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
        }, 2000);
    }

    if (gifs.length === 0) {
        message = <GifPage />
    } else {
        message = <div>
            <p>Waiting for a city</p>
        </div>
    }

    return (
        <>
            <div className="d-flex justify-content-center p-2">
                <input placeholder="Inserta tú palabra" type='text' onChange={e => (setBusqueda(e.target.value))} />
                <button className="btn btn-warning" onClick={handleSubmit}>Buscar</button>
            </div>
            <div className="container d-flex">
                <div className="row">
                    {
                        loading
                            ?
                            gifs.map(images =>
                                <div className="col-md-4 p-2 align-self-center" key={images}>
                                    <img className="img-fluid" alt='No hay imagen' src={images} />
                                </div>
                            )
                            :
                            message
                    }
                </div>
            </div>
        </>
    );
}

export default SearchPage;