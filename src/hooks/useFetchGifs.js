import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => { // De esta manera el componente solo se ejecutará cuando es renderizado por primera vez y evitamos hacer miles de peticiones fetch de lo mismo
        getGifs(category)
            .then(gifs => {
                setTimeout(() => {
                    setState({
                        data: gifs,
                        loading: false
                    })
                }, 500);
            })
            .catch(console.log);
    }, [category]);

    return state; // {data: [], loading: true}
}