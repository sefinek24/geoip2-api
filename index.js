const https = require('node:https');
const { name, version } = require('./package.json');

const API_BASE_URL = 'api.sefinek.net';
const API_PATH = '/api/v2/geoip/';
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

module.exports = {
	get: ip => {
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
						if (response.success) {
							resolve(response.data);
						} else {
							reject(new Error(response.message));
						}
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
	},
};
