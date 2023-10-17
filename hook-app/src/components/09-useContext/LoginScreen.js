import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext)
    return (
        <>
            <h1>Login</h1>
            <hr />

            <button onClick={ () => setUser({id: 123, name: 'facu'}) }>Login</button>
        </>
    )
}
