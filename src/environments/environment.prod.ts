import { Environment } from './environment.contract';

export const environment: Environment = {
  production: true,
  serviceEndpoint: 'http://52.191.249.160/',
  appInsights: {
    instrumentationKey: ''
  },
  appVersion: '0.1'
};
