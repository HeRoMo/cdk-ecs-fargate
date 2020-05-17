import { ConfigDefinition } from '../lib/Config';

const config: ConfigDefinition = {
  systemName: 'ecs-fargate',
  aws: {
    account: process.env.AWS_ACCOUNT || '',
    region: 'ap-northeast-2',
    vpc: {
      cidr: '10.0.0.0/16',
      subnetMask: 24,
    },
    ecs: {
      instanceType: 't3.micro',
    },
  },
};

export default config;
