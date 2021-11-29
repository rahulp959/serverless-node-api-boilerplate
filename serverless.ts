import type { AWS } from "@serverless/typescript";

import { hello } from "@apis/index";

const serverlessConfiguration: AWS = {
  service: "serverless-node-api-boilerplate",
  frameworkVersion: "2 || 3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: { hello },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

export default serverlessConfiguration;
