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

    export function get(ip: string): Promise<ApiResponse>;
}