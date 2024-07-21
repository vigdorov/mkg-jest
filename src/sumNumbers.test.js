const sumNumbers = require('./sumNumbers');

describe('sumNumbers()', () => {
    it('must return sum', () => {
        const result = sumNumbers(1, 17)

        expect(result).toBe(18);
    })

    it('must throw error', () => {
        expect(() => {
            sumNumbers('1','17')
        }).toThrow()
    })
    
    it('must throw error when increase NaN', () => {
        expect(() => {
            sumNumbers(1, NaN)
        }).toThrow()
    })
})
