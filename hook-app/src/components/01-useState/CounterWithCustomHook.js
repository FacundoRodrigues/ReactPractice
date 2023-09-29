import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { state: counter, increment, decrement, reset } = useCounter(100)

    return (
        <>
            <h1>Counter with Hook { counter }</h1>
            <hr />

            <button onClick={ () => increment(1) }>+1</button>
            <button onClick={ () => reset() }>Reset</button>
            <button onClick={ () => decrement(1) }>-1</button>
        </>
    )
}
