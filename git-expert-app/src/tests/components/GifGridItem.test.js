import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test on <GifGridItem >', () => {
    const title = 'some title'
    const url = 'https://someurl.com'

    test('debe mostrar el componente correctamente', () => {
    
        render( <GifGridItem title={ title } url={ url } />)

        expect( screen ).toMatchSnapshot()
    })

    test('debe tener un parrafo con el title', () => {
    
        render( <GifGridItem title={ title } url={ url } />)
        
        const p = screen.getByText('some title')

        expect(p.textContent).toBe(title)
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
    
    })
})