import { Construct } from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

import { BaseStack } from './BaseStack';
import { CONFIG } from '../Config';
import { Names } from '../Names';

export class VpcStack extends BaseStack {
  public readonly vpc: Vpc;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // VPC
    this.vpc = new Vpc(this, Names.prependSystemName('vpc'), {
      cidr: CONFIG.aws.vpc.cidr,
      // natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: CONFIG.aws.vpc.subnetMask,
          name: 'Public',
          subnetType: SubnetType.PUBLIC,
        },
        // {
        //   cidrMask: CONFIG.aws.vpc.subnetMask,
        //   name: 'Private',
        //   subnetType: SubnetType.PRIVATE,
        // },
      ],
    });
  }
}
