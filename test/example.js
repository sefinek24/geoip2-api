const geoIp = require('../index.js');
const ip = '109.207.159.255';

(async () => {
	const data = await geoIp.get(ip);
	console.log(data);
})();