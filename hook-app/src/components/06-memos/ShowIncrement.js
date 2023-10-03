import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('me volví a generar :( ')
    return (
        <button onClick={ () => { increment(2) } }>
            Increment
        </button>
    )
})