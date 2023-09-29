import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('hey')
    }, [])

    useEffect(() => {
        console.log('form changed')
    }, [formState])

    useEffect(() => {
        console.log('email changed')
    }, [email])


    const hanldeInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
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

            { (name === '123') && <Message /> }
        </>
    )
}