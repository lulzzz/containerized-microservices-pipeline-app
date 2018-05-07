import { Environment } from './environment.contract';

export const environment: Environment = {
  production: false,
  serviceEndpoint: 'http://microk8.trafficmanager.net/',
  appInsights: {
    instrumentationKey: ''
  },
  appVersion: '0.1'
};
