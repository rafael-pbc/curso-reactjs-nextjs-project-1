// jest.config.js
// module.exports = {
//   testEnvironmentOptions: {
//     testEnvironment: 'jest-fixed-jsdom',
//     customExportConditions: [''],
//   },
//   globals: {
//     TextEncoder: require('util').TextEncoder,
//     TextDecoder: require('util').TextDecoder,
//   }
// };
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    './config/jest.setup.js',
  ],
  globals: {
    Uint8Array: Uint8Array,
  },
  transformIgnorePatterns: [`/node_modules/(?!(msw))`],
  transform: {
    '^.+.[tj]sx?$': [
      'babel-jest',
    ],
  },
};