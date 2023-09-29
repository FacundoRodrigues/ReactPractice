import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                placeholder='Enter your name' 
            />

            <button onClick={ handleClick} >Focus</button>
        </>
    )
}
