#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEcsFargateStack } from '../lib/cdk-ecs-fargate-stack';

const app = new cdk.App();
new CdkEcsFargateStack(app, 'CdkEcsFargateStack');
