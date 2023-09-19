import { React, useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
    const [categories, setCategories] = useState([''])

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setcategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => 
                    <GifGrid
                        category={ category }
                        key={ category }
                    />
                    )
                }
            </ol>
        </>
    )
}
