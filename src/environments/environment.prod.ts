import { Environment } from './environment.contract';

export const environment: Environment = {
  production: true,
  serviceEndpoint: 'http://microk8.trafficmanager.net/',
  appInsights: {
    instrumentationKey: 'e7d39fb3-9522-4298-9c12-4748fdcd6f50'
  },
  appVersion: '0.1'
};
