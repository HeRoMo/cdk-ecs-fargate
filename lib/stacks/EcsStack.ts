import { Construct } from '@aws-cdk/core';
import {
  Cluster,
  FargateTaskDefinition,
  ContainerImage,
} from '@aws-cdk/aws-ecs';
import { Vpc } from '@aws-cdk/aws-ec2';


import { BaseStack } from './BaseStack';
import { Names } from '../Names';

export class EcsStack extends BaseStack {
  private readonly vpc: Vpc;

  public readonly cluster: Cluster;
  public readonly taskDefinition: FargateTaskDefinition;

  constructor(scope: Construct, id: string, vpc: Vpc) {
    super(scope, id);

    this.vpc = vpc;
    this.cluster = new Cluster(this, 'EcsClustr', {
      clusterName: Names.prependSystemName('cluster'),
      vpc: this.vpc,
    });

    this.taskDefinition = new FargateTaskDefinition(this, 'ruby-task', {
      family: 'fargate-ruby',
      cpu: 512,
      memoryLimitMiB: 1024,
    });

    this.taskDefinition.addContainer('ruby', {
      image: ContainerImage.fromRegistry('2.7.1-buster'),
      entryPoint: ['ruby'],
      command: ['-v'],
    });
  }
}
