const geoIp = require('../index.js');

describe('GeoIP Wrapper Module', () => {
	test('Should resolve with valid data for the Cloudflare IP address [1.1.1.1]', async () => {
		const cfIp = '1.1.1.1';

		const result = await geoIp.get(cfIp);
		expect(result.success).toBe(true);
		expect(result.status).toBe(200);
		expect(result.validationErr).toBe(false);
		expect(result.ip).toBe(cfIp);
		expect(result.data).toBeDefined();
	});

	test('Should resolve with valid data for the Google IP address [8.8.8.8]', async () => {
		const googleIp = '8.8.8.8';

		const result = await geoIp.get(googleIp);
		expect(result.success).toBe(true);
		expect(result.status).toBe(200);
		expect(result.validationErr).toBe(false);
		expect(result.ip).toBe(googleIp);
		expect(result.data).toBeDefined();
		expect(result.data.country).toBe('US');
	});

	test('Should resolve with valid data for a valid IP address [PL]', async () => {
		const validIP = '5.172.224.0';

		const result = await geoIp.get(validIP);
		expect(result.success).toBe(true);
		expect(result.status).toBe(200);
		expect(result.validationErr).toBe(false);
		expect(result.ip).toBe(validIP);
		expect(result.data).toBeDefined();
		expect(result.data.country).toBe('PL');
		expect(result.data.timezone).toBe('Europe/Warsaw');
	});

	test('Should reject with an error for an invalid IP address', async () => {
		const invalidIP = 'invalid.ip';

		const result = await geoIp.get(invalidIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(false);
	});

	test('Should resolve with null for a private IP address', async () => {
		const privateIP = '192.168.1.1';

		const result = await geoIp.get(privateIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(false);
	});

	test('Should reject with an error for the loopback IP address (127.0.0.1)', async () => {
		const loopbackIP = '127.0.0.1';

		const result = await geoIp.get(loopbackIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(false);
	});
});
