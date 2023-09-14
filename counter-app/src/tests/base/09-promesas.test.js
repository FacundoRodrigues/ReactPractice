import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Test on 09-promesas.js', () => {
    test('shouldReturnHeroeAsync', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0])
                done()
            })
    })

    test('shouldReturnError', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toEqual('No se pudo encontrar el héroe')
                done()
            })
    })
    
})
