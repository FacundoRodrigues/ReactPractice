import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado'

export const MemoHook = () => {
    const { state: counter, increment } = useCounter(10)
    const [ show, setShow ] = useState(true)
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
    return (
        <>
            <h1>Memorize</h1>
            <h3>Counter: <small>{counter}</small> </h3>

            <hr />

            <p>{ memoProcesoPesado }</p>

            <button onClick={ () => increment(1) }>+1</button>

            <button onClick={ () => { setShow(!show) } }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}