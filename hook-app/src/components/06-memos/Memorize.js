import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
    const { state: counter, increment } = useCounter(10)
    const [ show, setShow ] = useState(true)
    
    return (
        <>
            <h1>Memorize</h1>
            <h3>Counter: <Small value={counter} /> </h3>

            <hr />

            <button onClick={ () => increment(1) }>+1</button>

            <button onClick={ () => { setShow(!show) } }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}