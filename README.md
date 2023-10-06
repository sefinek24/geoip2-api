# 🗺️ GeoIP API Wrapper
<a href="https://www.npmjs.com/package/geoip2-api" target="_blank" title="geoip2-api - npm" style="text-decoration:none">
    <img src="https://img.shields.io/npm/dt/geoip2-api?maxAge=3600" alt="The number of downloads">
    <img src="https://img.shields.io/github/last-commit/sefinek24/geoip2-api" alt="Last commit">
    <img src="https://img.shields.io/github/issues/sefinek24/geoip2-api" alt="Issues">
    <img src="https://img.shields.io/github/commit-activity/w/sefinek24/geoip2-api" alt="Commit activity">
    <img src="https://img.shields.io/github/languages/code-size/sefinek24/geoip2-api" alt="Code size">
</a>


# 📥 Installation
```bash
npm install geoip2-api
```


# 📝 Information
This documentation provides information about the lightweight Node.js module designed for sending requests to a geolocation data API. This module enables you to retrieve location information for a specified IP address and takes full advantage of native modules. The [official API](https://api.sefinek.net/docs/v2) is thoroughly optimized and secure.


# 🤔 Importing
```js
const geoIp = require('geoip2-api');
```


# 😎 Usage
```js
const data = await geoIp.get('109.207.159.255');
console.log(data);
```


# 🔑 License MIT
This GeoIP API client script is provided under the MIT License. See the [LICENSE](LICENSE) file for more details.

For any questions or issues related to the script, please visit the [GitHub repository](https://github.com/sefinek24/geoip2-api) for the latest updates and support.

Copyright 2023 © by [Sefinek](https://sefinek.net). All Rights Reserved.