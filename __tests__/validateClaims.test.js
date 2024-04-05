const { validateClaims } = require('../src/utils/validateClaims');

describe('validateClaims function', () => {
    it('should return true for valid claims', () => {
        const claims = {
            Name: 'John Doe',
            Role: 'Admin',
            Seed: '7841'
        };
        expect(validateClaims(claims)).toBe(true);
    });

    it('should return false when number is present in Name', () => {
        const claims = {
            Name: 'Jane Doe1',
            Role: 'Admin',
            Seed: '7841'
        };
        expect(validateClaims(claims)).toBe(false);
    });

    it('should return false when Role is invalid', () => {
        const claims = {
            Name: 'John Doe',
            Role: 'SuperAdmin',
            Seed: '7841'
        };
        expect(validateClaims(claims)).toBe(false);
    });

    it('should return false when Seed is not a prime number', () => {
        const claims = {
            Name: 'John Doe',
            Role: 'Admin',
            Seed: '1234'
        };
        expect(validateClaims(claims)).toBe(false);
    });

    it('should return false when claims object has invalid length', () => {
        const claims = {
            Name: 'John Doe',
            Role: 'Admin',
            Seed: '7841',
            ExtraField: 'Extra'
        };
        expect(validateClaims(claims)).toBe(false);
    });
});