import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            <h1>About</h1>
            <hr />

            <pre>
                { JSON.stringify(user) }
            </pre>

            <button onClick={ () => setUser({}) }>Logout</button>
        </>
    )
}