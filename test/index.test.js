const geoIp = require('../index.js');

const validIP = '8.8.8.8';
const invalidIP = 'invalid_ip';

describe('GeoIP Module', () => {
	test('Should resolve with valid data for a valid IP address', async () => {
		const result = await geoIp.get(validIP);
		expect(result).toBeDefined();
		expect(result).toHaveProperty('country');
	});

	test('Should reject with an error for an invalid IP address', async () => {
		try {
			await geoIp.get(invalidIP);
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
			expect(err.message).toMatch(/Invalid IP/);
		}
	});
});
