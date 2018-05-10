import { Environment } from './environment.contract';

export const environment: Environment = {
  production: true,
  serviceEndpoint: 'https://microk8s.microservices.cse.trafficmanager.net/',
  appInsights: {
    instrumentationKey: 'f473f8de-caae-4941-a46c-15eb5fd8ebf7'
  },
  appVersion: '0.1'
};
