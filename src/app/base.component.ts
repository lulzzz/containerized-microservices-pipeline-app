import { Component, Injector } from '@angular/core';
import { AppInsightsService } from './appinsights.service';

export class BaseComponent {

    private appInsightsService: AppInsightsService;

    constructor() {
        // Manually retrieve the monitoring service from the injector
        // so that constructor has no dependencies that must be passed in from child
        const injector = Injector.create({providers: [{provide: AppInsightsService, deps: []}]});
        this.appInsightsService = injector.get(AppInsightsService);
        this.logNavigation();
    }

    private logNavigation() {
        this.appInsightsService.logPageView();
    }

    public logEvent(name: string, properties?: any, measurements?: any) {
        this.appInsightsService.logEvent(name, properties, measurements);
    }

    public logError(error: Error, properties?: { [key: string]: string }, measurements?: { [key: string]: number }) {
        this.appInsightsService.logError(error, properties, measurements);
    }
}
