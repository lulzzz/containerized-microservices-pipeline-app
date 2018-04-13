export interface Environment {
    production: boolean;
    serviceEndpoint: string;
    appInsights: Microsoft.ApplicationInsights.IConfig;
    appVersion: string;
}
