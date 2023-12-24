const geoIp = require('./index.js');
const address = '86.63.119.32';

(async () => {
	const data = await geoIp.get(address);
	console.log(data);
})();

// Output:
//
// {
//  success: true,
//  status: 200,
//  validationErr: false,
//  message: 'Found',
//  ip: '86.63.119.32',
//  data: {
//    range: [ 1446998016, 1447000063 ],
//    country: 'PL',
//    region: '30',
//    eu: '1',
//    timezone: 'Europe/Warsaw',
//    city: 'Pila',
//    ll: [ 53.1492, 16.7461 ],
//    metro: 0,
//    area: 5
//  }
// }