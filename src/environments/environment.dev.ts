import { Environment } from './environment.contract';

export const environment: Environment = {
  production: false,
  serviceEndpoint: 'https://microk8s.microservices.cse.trafficmanager.net/',
  appInsights: {
    instrumentationKey: ''
  },
  appVersion: '0.1'
};
