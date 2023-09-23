import { React, useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setcategories }) => {
    const [inputValue, setinputValue] = useState('')

    const handleOnChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim() === undefined || inputValue.trim() === '' ) return alert('no puede ser vacío')

        setcategories(categories => [ inputValue, ...categories])
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                value={ inputValue }
                placeholder='Ingrese una nueva serie'
                onChange={ handleOnChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory