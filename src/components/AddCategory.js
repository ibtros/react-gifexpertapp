import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState(''); // Se coloca un value por defecto así: useState('algo'), undefined da error -> useState(); así ya no da error: useState('');
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
