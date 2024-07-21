const strJoin = require('./strJoin');

describe('strJoin()', ()=>{
    it('must return joined string', () => {
        const result = strJoin('.', 'h','j', 'k')

        expect(result).toBe('h.j.k');
        
    })
})