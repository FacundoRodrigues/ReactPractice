import { getImagen } from "../../base-pruebas/11-async-await"

describe('Test on 11-async-await.js - async-await y fetch', () => {
    test('shouldReturnImageUrl', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string')
    })

    test('shouldReturnImageUrl', async () => {
        const url = await getImagen();

        expect( url.includes('https://')).toBe(true)
    })
    
})
