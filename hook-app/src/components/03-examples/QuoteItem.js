import React from 'react'

export const QuoteItem = ( { quote = '' , author = '' } ) => {
    return (
        <>
            <blockquote>
                <p>{quote}</p>
                <cite>{author}</cite>
            </blockquote>
        </>
    )
}
