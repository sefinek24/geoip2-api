const geoIp = require('../index.js');

const mockIpAddress = '109.207.159.255';

(async () => {
    const data = await geoIp.get(mockIpAddress);
    console.log(data);
})();