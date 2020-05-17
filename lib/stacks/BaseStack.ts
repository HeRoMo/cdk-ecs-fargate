import { Construct, Stack } from '@aws-cdk/core';

import { CONFIG } from '../Config';

const env = {
  account: CONFIG.aws.account,
  region: CONFIG.aws.region,
};

export abstract class BaseStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id, { env });
  }
}
