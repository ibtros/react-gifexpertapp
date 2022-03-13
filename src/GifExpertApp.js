import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['smiling', 'sleeping', 'happy'];
    const [categories, setCategories] = useState(['smiling', 'sleeping', 'happy']);
    // const handleAdd = () => {
    //     setCategories([...categories, 'puppies']); // También puede ser: setCategories( (estado anterior: ) cats => (nuevo estado: ) [...cats, 'puppies']);
    // };
    // <button onClick={handleAdd}>Agregar categoría</button>
    return ( 
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;