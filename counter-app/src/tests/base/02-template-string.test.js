import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Units tests on 02-template-string.js', () => {
    test('getSaludoShouldReturnHolaFacu', () => {
        const name = 'Facu';

        const saludo = getSaludo(name);

        expect(saludo).toBe('Hola ' + name);
    })

    test('getSaludoShouldReturnDefaultSaludo', () => {
        const defaultName = 'Carlos';

        const saludo = getSaludo(defaultName);

        expect(saludo).toBe('Hola ' + defaultName);
    })
})