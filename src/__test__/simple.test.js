describe('Testing simple types', () => {
    it('toBe', () => {
        expect(1).toBe(1);
        expect(2).not.toBe(1);
        expect('str').toBe('str');
        expect(true).toBe(true);
        expect(null).toBe(null);
        expect(NaN).toBe(NaN);
        expect(undefined).toBe(undefined);
    });

    it('special values', () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(undefined).toBeUndefined();
        expect(NaN).toBeNaN();
        expect(null).toBeNull();
    });

    it('isEqual', () => {
        expect({key: 1}).toEqual({key: 1});
        expect([1, 2]).toEqual([1, 2]);
    });

    it('toThrow', () => {
        const throwFunc = () => {
            throw new Error('wild error');
        };

        expect(throwFunc).toThrow('wild error');
        expect(() => {
            throwFunc();
        }).toThrow('wild error');
    });
});
