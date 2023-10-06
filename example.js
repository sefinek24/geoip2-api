const geoIp = require('./index.js');
const ip = '185.244.214.231';

(async () => {
	const data = await geoIp.get(ip);
	console.log(data);
})();