import React, { useState } from 'react'
import { MultiplesCustomHooks } from '../03-examples/MultiplesCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultiplesCustomHooks />}

            <button
                onClick={ () => { setShow(!show) } }
            >
                Show/Hide
            </button>
        </>
    )
}
