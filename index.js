const https = require('node:https');
const { name, version } = require('./package.json');

// Define the base URL and API path for the GeoIP service.
const API_BASE_URL = 'api.sefinek.net';
const API_PATH = '/api/v2/geoip/';

// Define the headers for the HTTP request.
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/geolite2-api)`,
	'Accept': 'application/json',
	'Accept-Language': 'en-US,en;q=0.9',
	'Cache-Control': 'no-cache',
	'Pragma': 'no-cache',
	'DNT': '1',
	'Connection': 'keep-alive',
	'Upgrade-Insecure-Requests': '1',
};

/**
 * Function to make a GeoIP API request.
 *
 * @param {string} ip - The IP address for which to retrieve location information.
 * @returns {Promise<Object>} - A promise that resolves to the location data or rejects with an error.
 */
function makeRequest(ip) {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: API_BASE_URL,
			path: API_PATH + ip,
			method: 'GET',
			headers,
		};

		const req = https.request(options, res => {
			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', () => {
				try {
					const response = JSON.parse(data);
					resolve(response);
				} catch (err) {
					reject(err);
				}
			});
		});

		req.on('error', err => {
			reject(err);
		});

		req.end();
	});
}

// Export the makeRequest function for external use.
module.exports = {
	get: makeRequest,
};