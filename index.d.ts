declare module 'geoip2-api' {
    export interface GeoIpData {
        range: [number, number];
        country: string;
        region: string;
        eu: string;
        timezone: string;
        city: string;
        ll: [number, number];
        metro: number;
        area: number;
    }

    export interface ApiResponse {
        success: boolean;
        status: number;
        validationErr: boolean;
        message: string;
        ip: string;
        data: GeoIpData;
    }

    /**
     * Function to make a GeoIP API request.
     *
     * @param {string} ip - The IP address for which to retrieve location information.
     * @example
     * const geoIp = require('geoip2-api');
     *
     * (async () => {
     *     const data = await geoIp.get('185.244.214.231');
     *     console.log(data);
     * });
     * @returns {Promise<Object>} - A promise that resolves to the location data or rejects with an error.
     */
    export function get(ip: string): Promise<ApiResponse>;
}