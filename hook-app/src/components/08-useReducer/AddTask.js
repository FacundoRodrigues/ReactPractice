import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTask = ({ handleAdd }) => {
    const [{ task }, handleInputChange, reset] = useForm([])

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if(task === undefined || task?.trim().length < 1) return

        handleAdd(task)

        reset()
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className='form-add'>
                    <input
                        type='text'
                        name='task'
                        value={ task || ''}
                        autoComplete='off'
                        onChange={ handleInputChange }
                    />
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}