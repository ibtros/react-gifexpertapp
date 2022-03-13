import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    useEffect(() => { // De esta manera el componente solo se ejecutará cuando es renderizado por primera vez y evitamos hacer miles de peticiones fetch de lo mismo
        getGifs(category)
            .then(gifs => setImages(gifs))
            .catch(console.log);
    }, [category]);
    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map((img) => {
                    return <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                })  
            }
        </div>
        </>
    )
}
