import { useEffect, useState } from "react";
import './SearchPage.css';

function GifPage() {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=8VzQ2kG2msZoLOMYZOSe6NsjcSXWNo5c&limit=12&rating=g`)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                const { data = [] } = response
                const gif = data.map(image => image.images.downsized_medium.url)
                setGifs(gif)
            })
    }, [])

    return (
        <>
            {
                gifs.map(images =>
                    <div className="col-md-4 p-2 align-self-center" key={images}>
                        <img className="img-fluid rounded-1" alt='No hay imagen' src={images} />
                    </div>
                )
            }
        </>
    );
}

export default GifPage;