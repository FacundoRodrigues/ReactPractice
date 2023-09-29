import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { QuoteItem } from './QuoteItem'

export const MultiplesCustomHooks = () => {
    const totalQuotes = 1
    const { loading, data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${totalQuotes}`)

    //!!data: si tenemos data..
    const { quote , author } = !!data && data[0]
    
    const handleClick = ( number ) => {
        console.log(number)
    }


    return (
        <article>
            <div className='container'>
                <header>
                    <strong className='title'>Breaking Bad quotes</strong>                
                </header>

                <div className='container'>
                    <div>
                        <button onClick={ handleClick(3) }>Top 3</button>
                    </div>
                    <div>
                        <button>Top 5</button>
                    </div>
                    <div>
                        <button>Top 10</button>
                    </div>
                </div>
            </div>
            <hr/>

            <div>
                {
                    loading 
                    ?   <code>Loading...</code> 
                    :   <QuoteItem quote={quote} author={author} />
                }
            </div>            
        </article>
    )
}
