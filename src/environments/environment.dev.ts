import { Environment } from './environment.contract';

export const environment: Environment = {
  production: false,
  serviceEndpoint: 'http://localhost:4201/',
  appInsights: {
    instrumentationKey: ''
  },
  appVersion: '0.1'
};
