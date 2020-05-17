#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { Names } from '../lib/Names';
import { VpcStack } from '../lib/stacks/VpcStack';
import { EcsStack } from '../lib/stacks/EcsStack';

const app = new cdk.App();
const { vpc } = new VpcStack(app, Names.stackName('vpc'));
new EcsStack(app, Names.stackName('cluster'), vpc);
