import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1>Home</h1>
            <hr />

            <pre>
                { JSON.stringify(user) }
            </pre>
        </>
    )
}
