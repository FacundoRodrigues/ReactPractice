import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultiplesCustomHooks = () => {
    const totalQuotes = 1
    const { loading, data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${totalQuotes}`)

    //!!data: si tenemos data..
    const { quote , author } = !!data && data[0]
    



    return (
        <article>
            <header>
                <h3>Breaking Bad quotes</h3>
            </header>
            <hr/>

            <div>
                {
                    loading 
                    ?   <code>Loading...</code> 
                    :   <blockquote>
                            <p>{quote}</p>
                            <cite>{author}</cite>
                        </blockquote>
                }
            </div>            
        </article>
    )
}
