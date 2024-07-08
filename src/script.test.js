const {sum} = require('./script');

describe('Check sum function', () => {
    it('must return sum two numbers', () => {
        const result = sum(3, 5);

        expect(result).toBe(8);
    });

    it('must return sum two string numbers', () => {
        const result = sum('3', '5');

        expect(result).toBe(8);
    });

    it('must throw error', () => {
        expect(() => sum('3', 'lolkek')).toThrow('Cannot prepare number');
    });
});