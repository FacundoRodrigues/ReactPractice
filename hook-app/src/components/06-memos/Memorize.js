import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const Memorize = () => {
    const { state: counter, increment } = useCounter(10)

    return (
        <>
            <h1>Memorize</h1>
            <h3>Counter: {counter}</h3>

            <hr />

            <button onClick={ () => increment(1) }>+1</button>
        </>
    )
}
