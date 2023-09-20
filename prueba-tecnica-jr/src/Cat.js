import React, {useEffect, useState} from 'react'

const URL_FACT = 'https://catfact.ninja/fact';
const URL_IMAGE_PREFIX_URL = 'https://cataas.com/';

export const Cat =  () => {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState('')

    //Opción 1
    // useEffect( () => {
    //     getCatFact()
    // }, [])

    // const getCatFact = async () => {
    //     const response = await fetch( URL_FACT );
    //     const { fact }  = await response.json();

    //     setFact(fact)

    //     const firstWord = fact.split(' ', 3).join(' ');
    //     setFirstWord(firstWord);
    // }

    //Opción 2
    useEffect( () => {
        fetch(URL_FACT)
            .then(response => response.json())
            .then( ({ fact }) => {
                setFact(fact)
            })
    }, [])

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