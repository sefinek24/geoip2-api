const https = require('https');
const { name, version, devDependencies } = require('./package.json');

// HTTP request headers
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/geoip2-api)${process.env.JEST_WORKER_ID ? ` jest/${devDependencies.jest.replace(/^[^0-9]*/, '')}` : ''}`,
	'Accept': 'application/json',
	'Cache-Control': 'no-cache',
	'CF-Visitor': '{"scheme":"https"}',
	'Connection': 'keep-alive',
	'DNT': '1',
	'Pragma': 'no-cache',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1; mode=block'
};

// Makes a GET request to the GeoIP API and returns the response
const makeRequest = ip => new Promise((resolve, reject) => {
	const req = https.get(`https://api.sefinek.net/api/v2/geoip/${ip}`, { headers }, res => {
		if ((res.statusCode < 200 || res.statusCode >= 300) && res.statusCode !== 404) {
			return reject(new Error(`HTTP Status Code: ${res.statusCode}`));
		}

		const chunks = [];
		res.on('data', chunk => chunks.push(chunk));
		res.on('end', () => {
			try {
				const data = Buffer.concat(chunks).toString();
				resolve(JSON.parse(data));
			} catch (err) {
				reject(err);
			}
		});
	});

	req.on('error', reject);
	req.setTimeout(7500, () => {
		req.destroy();
		reject(new Error('Timeout error'));
	});
});

// Exports the makeRequest function and version for external use
module.exports = { get: makeRequest, version };