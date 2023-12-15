const geoIp = require('../index.js'); // Import the GeoIP module

describe('GeoIP Wrapper Module', () => {
	// Test to check if the get function resolves with valid data for a valid IP address.
	test('Should resolve with valid data for a valid IP address (US)', async () => {
		const validIP = '8.8.8.8';

		const result = await geoIp.get(validIP);
		expect(result.success).toBe(true);
		expect(result.status).toBe(200);
		expect(result.validationErr).toBe(false);
		expect(result.message).toBe('Found');
		expect(result.ip).toBe(validIP);
		expect(result.data).toBeDefined();
		expect(result.data.country).toBe('US');
	});

	// Test to check if the get function resolves with valid data for another valid IP address.
	test('Should resolve with valid data for a valid IP address (PL)', async () => {
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

	// Test to check if the get function rejects with an error for an invalid IP address.
	test('Should reject with an error for an invalid IP address', async () => {
		const invalidIP = 'invalid_ip'; // Example invalid IP address

		const result = await geoIp.get(invalidIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(true);
	});

	// Test to check if the get function returns null for a private IP address.
	test('Should resolve with null for a private IP address', async () => {
		const privateIP = '192.168.1.1'; // Example private IP address

		const result = await geoIp.get(privateIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(false);
	});

	// Test to check if the get function returns an error for the loopback IP address (127.0.0.1).
	test('Should reject with an error for the loopback IP address (127.0.0.1)', async () => {
		const loopbackIP = '127.0.0.1'; // Loopback IP address

		const result = await geoIp.get(loopbackIP);
		expect(result.success).toBe(false);
		expect(result.status).toBe(404);
		expect(result.validationErr).toBe(false);
	});

	// Test to check if the get function returns valid data for the Cloudflare IP address (1.1.1.1).
	test('Should resolve with valid data for the Cloudflare IP address (1.1.1.1)', async () => {
		const cloudflareIP = '1.1.1.1'; // Cloudflare IP address

		const result = await geoIp.get(cloudflareIP);
		expect(result).toBeDefined();
		expect(result.data).toHaveProperty('country');
	});
});
