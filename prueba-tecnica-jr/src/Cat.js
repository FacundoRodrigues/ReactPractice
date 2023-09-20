import React, {useEffect, useState} from 'react'

const URL_FACT = 'https://catfact.ninja/fact';
const URL_IMAGE_PREFIX_URL = 'https://cataas.com/';

export const Cat =  () => {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState('')

    //Opción 2
    // usa un useEffect para recuperar el hecho (Es buena practica que cada useEffect haga una cosa)
    useEffect( () => {
        fetch(URL_FACT)
            .then(response => response.json())
            .then( ({ fact }) => {
                setFact(fact)
            })
    }, [])

    // usa otro para pegarle a la otra API
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0];

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
            .then(response => response.json())
            .then( data => {
                const { url } = data;
                setImageUrl(url);
            })
    },[fact])

    return (
        <>
            <h1>Fact</h1>
            <h2>{ fact }</h2>
            <img src= {`${URL_IMAGE_PREFIX_URL}${imageUrl}`} alt='some description of the image'/>
        </>
    )
}