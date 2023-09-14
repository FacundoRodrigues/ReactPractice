import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Test 07-deses-arr.js', () => {
    test('ShouldReturnAStringAndANumber', () => {
        var [ letters, numbers ] = retornaArreglo(); //['ABC', 123]

        expect( letters ).toBe('ABC')
        expect( typeof letters ).toBe('string')

        expect( numbers ).toBe( 123 )
    })
})