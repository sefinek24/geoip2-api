const geoip = require('../index.js');

const validIP = '8.8.8.8';
const invalidIP = 'invalid_ip';

describe('GeoIP Module', () => {
    test('Should resolve with valid data for a valid IP address', async () => {
        const result = await geoip.get(validIP);
        expect(result).toBeDefined();
        expect(result).toHaveProperty('country');
    });

    test('Should reject with an error for an invalid IP address', async () => {
        try {
            await geoip.get(invalidIP);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toMatch(/Invalid IP/);
        }
    });
});
