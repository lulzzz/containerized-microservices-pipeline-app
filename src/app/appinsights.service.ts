import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AppInsights } from 'applicationinsights-js';

@Injectable()
export class AppInsightsService {

    private config: Microsoft.ApplicationInsights.IConfig = {
        instrumentationKey: environment.appInsights.instrumentationKey
    };

    constructor() {
        if (!AppInsights.config) {
            AppInsights.downloadAndSetup(this.config);
        }
    }

    public logPageView(name?: string, url?: string, properties?: { [key: string]: string },
            measurements?: { [name: string]: number }, duration?: number) {
        AppInsights.trackPageView(name, url, this.addGlobalProperties(properties), measurements, duration);
    }

    public logEvent(name: string, properties?: { [key: string]: string }, measurements?: { [name: string]: number }) {
        AppInsights.trackEvent(name, this.addGlobalProperties(properties), measurements);
    }

    public logError(error: Error, properties?: { [key: string]: string }, measurements?: { [key: string]: number }) {
        AppInsights.trackException(error, null, this.addGlobalProperties(properties), measurements);
    }

    private addGlobalProperties(properties?: { [key: string]: string }): { [key: string]: string } {
        // if the properties object is null, set a default
        if (!properties) {
            properties = {};
        }

        // add global properties that we want to track in every log
        properties['appVersion'] = environment.appVersion;

        return properties;
    }
}
