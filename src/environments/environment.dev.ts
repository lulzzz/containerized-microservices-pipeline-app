import { Environment } from './environment.contract';

export const environment: Environment = {
  production: false,
  serviceEndpoint: '',
  appInsights: {
    instrumentationKey: ''
  },
  appVersion: '0.1'
};
