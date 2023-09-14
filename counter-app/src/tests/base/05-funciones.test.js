import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"
import '@testing-library/jest-dom'

describe('Test 05-funciones', () => {
    test('getUserShouldReturnAnObject', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(userTest).toEqual(user)
    })

    test('getUsuarioActivoShouldReturnAnObject', () => {
        const userName = 'Facu';

        const userTest = {
            uid: 'ABC567',
            username: userName
        }

        const user = getUsuarioActivo(userName)

        expect(userTest).toEqual(user)
    })
})