import * as config from 'config';

export interface ConfigDefinition {
  systemName: string;
  aws: AwsConfig;
}

interface AwsConfig {
  /**
   * AWS のアカウントID
   */
  account: string;
  region: string;
  vpc: {
    cidr: string;
    subnetMask: number;
  },
  ecs: {
    instanceType: string;
  }
}

const CONFIG: ConfigDefinition = {
  systemName: config.get<string>('systemName'),
  aws: config.get<AwsConfig>('aws'),
};

export { CONFIG };
