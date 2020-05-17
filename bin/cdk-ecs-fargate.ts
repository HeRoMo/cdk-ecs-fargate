#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { VpcStack } from '../lib/stacks/VpcStack';
import { Names } from '../lib/Names';

const app = new cdk.App();
new VpcStack(app, Names.stackName('vpc'));
