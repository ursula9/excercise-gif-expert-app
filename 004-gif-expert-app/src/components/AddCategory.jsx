import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        //console.log('Hola mundo desde onSubmit');
        event.preventDefault();
        console.log(inputValue);
        // setCategories(.....inputValue)
        if( inputValue.trim().length <= 1) return ;
        //setCategories( categories => [inputValue  , ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }

    return(

        // <form onSubmit={ (event) => onSubmit(event)}>
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}