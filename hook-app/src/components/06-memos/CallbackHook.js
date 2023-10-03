import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    //Uso comun cuando se envia una fuction a un componente que está memorizado
    const increment = useCallback((num) => {
        setCounter( c => c + num )
    }, [setCounter])

    return (
        <div>
            <h1>useCallbackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />            
        </div>
    )
}
