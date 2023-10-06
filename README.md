# 🗺️ GeoIP Lite 2: API Wrapper

[![The number of downloads](https://img.shields.io/npm/dt/geoip2-api?maxAge=3600)](https://www.npmjs.com/package/geoip2-api)
[![Last commit](https://img.shields.io/github/last-commit/sefinek24/geoip2-api)](https://github.com/sefinek24/geoip2-api)
[![Issues](https://img.shields.io/github/issues/sefinek24/geoip2-api)](https://github.com/sefinek24/geoip2-api)
[![Commit activity](https://img.shields.io/github/commit-activity/w/sefinek24/geoip2-api)](https://github.com/sefinek24/geoip2-api)
[![Code size](https://img.shields.io/github/languages/code-size/sefinek24/geoip2-api)](https://github.com/sefinek24/geoip2-api)


## 📝 Information
This documentation provides information about the lightweight Node.js module designed for sending requests to a geolocation data API. This module enables you to retrieve location information for a specified IP address and takes full advantage of native modules. The [official API](https://api.sefinek.net/docs/v2) is thoroughly optimized and secure.

> We use the [MaxMind](https://www.maxmind.com) database, which is automatically updated daily.


## 💻 Locally
There is an alternative to this module that allows for local geolocation retrieval based on a specific IP address. However, this will increase the memory usage because the alternative module stores the MaxMind database in RAM.

> [geoip-lite2 on npm](https://www.npmjs.com/package/geoip-lite2)


## 📥 Installation
```bash
npm install geoip2-api
```


## 😎 Usage
```js
const geoIp = require("geoip2-api");

const data = await geoIp.get("185.244.214.231");
console.log(data);
```
<div align="center">
    <a href="example.js">Open example.js >></a>
</div>


## ✨ Output
```json
{
  "success": true,
  "status": 200,
  "validationErr": false,
  "message": "Found",
  "ip": "185.244.214.231",
  "data": {
    "range": [ 3119830528, 3119830783 ],
    "country": "PL",
    "region": "14",
    "eu": "1",
    "timezone": "Europe/Warsaw",
    "city": "Warsaw",
    "ll": [ 52.1574, 21.0126 ],
    "metro": 0,
    "area": 20
  }
}
```


## 💙 Support
For any questions or issues related to the script, please visit the [GitHub repository](https://github.com/sefinek24/geoip2-api) for the latest updates and support.

If you like this module, please star the repository.


## 🔑 License MIT
This GeoIP API client script is provided under the MIT License. See the [LICENSE](LICENSE) file for more details.

Copyright 2023 © by [Sefinek](https://sefinek.net). All Rights Reserved.