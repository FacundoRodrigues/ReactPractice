import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test on 08-imp-exp.js', () => {
    test('shouldReturnAHeroById ', () => {
        const id = 1;
        const heroe = getHeroeById(id)

        const data = heroes.find(h => h.id === id)
        
        expect( heroe ).toEqual( data )
    })

    test('shouldReturnUndefind ', () => {
        const id = 17;
        const heroe = getHeroeById(id)
        
        expect( heroe ).toBe( undefined )
    })

    
    test('shouldReturnDcHeroes', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner)

        const data = heroes.filter(h => h.owner === owner)
        
        expect( heroe ).toEqual( data )
    })

    test('shouldReturnMarvelHeroes_Length', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner)
        
        expect( heroe.length ).toBe( 2 )
    })
    
})
