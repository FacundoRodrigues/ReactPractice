
describe('Unit tests on demo.test.js', () => {
    test('shouldBeEqualString ', () => {
        const mesage = 'hola mundo';
    
        const mesage2 = `hola mundo`;
    
        expect(mesage).toBe(mesage2);
    })
});