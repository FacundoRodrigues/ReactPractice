import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {
    const [formValues, hanldeInputChange, handleSubmit] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    return (
        <form onSubmit={ handleSubmit }>
            <h1>useEffect</h1>
            <hr/>

            <input
                type='text'
                name='name'
                placeholder='Your name'
                autoComplete='off'
                value={ name }
                onChange={ hanldeInputChange }
            />

            <input
                type='text'
                name='email'
                placeholder='example@email.com'
                autoComplete='off'
                value={ email }
                onChange={ hanldeInputChange }
            />

            <input
                type='password'
                name='password'
                placeholder='******'
                value={ password }
                onChange={ hanldeInputChange }
            />

            <button type='submit'>Save</button>
        </form>
    )
}