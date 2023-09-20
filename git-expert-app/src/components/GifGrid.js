import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    useEffect( () => {
        getGifts();
    }, [])

    const [images, setImages] = useState([])

    const getGifts = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=MpM4Rc9PIODjxawZSAkmc6ZHwPuDvfAI';
        const response = await fetch( url );
        const { data } = await response.json();

        const gifts = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifts);
    }

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                { 
                    images.map( img => 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }         
            </div>
        </>
    )
}