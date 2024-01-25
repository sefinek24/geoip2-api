const https = require('https');
const { name, version, devDependencies } = require('./package.json');

// Define the headers for the HTTP request
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/geoip2-api) ${!process.env.JEST_WORKER_ID ? '' : `jest/${devDependencies.jest.replace(/^[^0-9]*/, '')}`}`,
	'Accept': 'application/json',
	'Cache-Control': 'no-cache',
	'CF-Visitor': '{"scheme":"https"}',
	'Connection': 'keep-alive',
	'DNT': '1',
	'Pragma': 'no-cache',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1; mode=block',
};

// Main function with timeout
const makeRequest = ip => {
	return new Promise((resolve, reject) => {
		const req = https.get(`https://api.sefinek.net/api/v2/geoip/${ip}`, { headers }, (res) => {
			if ((res.statusCode < 200 || res.statusCode >= 300) && res.statusCode !== 404) {
				return reject(new Error(`HTTP Status Code: ${res.statusCode}`));
			}

			const chunks = [];
			res.on('data', chunk => chunks.push(chunk));
			res.on('end', () => {
				try {
					const data = Buffer.concat(chunks).toString();
					resolve(JSON.parse(data));
				} catch (error) {
					reject(error);
				}
			});
		});

		req.on('error', reject);
		req.setTimeout(7500, () => {
			req.destroy();
			reject(new Error('Timeout error'));
		});
	});
};

// Export the makeRequest function for external use
module.exports = { get: makeRequest, version };