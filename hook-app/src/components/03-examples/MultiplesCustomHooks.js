import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { QuoteItem } from './QuoteItem'

export const MultiplesCustomHooks = () => {
    const [url, setUrl] = useState(`https://api.breakingbadquotes.xyz/v1/quotes/1`)
    const { loading, data} = useFetch(url)

    //!!data: si tenemos data..
    const { quote , author } = !!data && data[0]
    
    const handleClick = ( totalQuotes ) => {
        const newUrl = `https://api.breakingbadquotes.xyz/v1/quotes/${totalQuotes}`
        setUrl(newUrl)
    }


    return (
        <article>
            <div className='container'>
                <header>
                    <strong className='title'>Breaking Bad quotes</strong>                
                </header>

                <div className='container'>
                    <div>
                        <button onClick={ () => handleClick(1) }>Top 1</button>
                    </div>
                    <div>
                        <button onClick={ () => handleClick(3) }>Top 3</button>
                    </div>
                    <div>
                        <button onClick={ () => handleClick(5) }>Top 5</button>
                    </div>
                </div>
            </div>
            <hr/>

            <div>
                {
                    loading 
                    ?   <code>Loading...</code> 
                    :   data.map( (q , i ) => <QuoteItem key={i} quote={q.quote} author={q.author} />)
                }


            </div>            
        </article>
    )
}
