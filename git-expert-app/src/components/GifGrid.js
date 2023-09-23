import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGifs( category )

    return (
        <>
            { loading && <p>Loading</p> }

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