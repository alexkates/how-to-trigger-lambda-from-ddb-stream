import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HowToTriggerLambdaFromDdbStream from '../lib/how-to-trigger-lambda-from-ddb-stream-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HowToTriggerLambdaFromDdbStream.HowToTriggerLambdaFromDdbStreamStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
