import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const BREAKING_BAD_API_PREFIX = `https://api.breakingbadquotes.xyz/v1/quotes/`

export const Layout = () => {
    const [url, setUrl] = useState(`${BREAKING_BAD_API_PREFIX}${1}`)
    const [boxSize, setBoxSize] = useState({})
    const { data} = useFetch(url)

    const { quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
        <article>
            <div className='container'>
                <header>
                    <strong className='title'>Layout effect</strong>                
                </header>
            </div>
            <hr/>

            <div>
            <blockquote style={{ display: 'flex'}}>
                    <p ref={ pTag }>{quote}</p>
                </blockquote>             
            </div>

            <hr />

            <p>Muestra el width dinámico según la quote</p>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>   
        </article>
    )
}
