const geoIp = require('./index.js');
const address = '185.244.214.231';

(async () => {
	const data = await geoIp.get(address);
	console.log(data);
})();