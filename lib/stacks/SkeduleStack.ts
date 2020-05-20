import { Construct } from '@aws-cdk/core';
import { Rule, Schedule } from '@aws-cdk/aws-events';
import { EcsTask } from '@aws-cdk/aws-events-targets';
import { Cluster, TaskDefinition } from '@aws-cdk/aws-ecs';

import { BaseStack } from './BaseStack';

interface ScheduleStackParams {
  cluster: Cluster;
  taskDefinition: TaskDefinition;
}

export class ScheduleStack extends BaseStack {
  constructor(scope: Construct, id: string, params: ScheduleStackParams) {
    super(scope, id);

    const { cluster, taskDefinition } = params;
    const ecsTaskTarget = new EcsTask({
      cluster,
      taskDefinition,
      subnetSelection: cluster.vpc.selectSubnets({ subnetType: SubnetType.PUBLIC }),
      containerOverrides: [
        { containerName: 'ruby' },
      ],
    });
    new Rule(this, 'ScheduleRule', {
      ruleName: 'ruby-task',
      schedule: Schedule.cron({ minute: '0', hour: '4' }),
      targets: [ecsTaskTarget],
    });
  }
}
