module.exports = {
  mutate: ['src/**/*.ts', '!src/**/*@(.test|.spec|Spec).ts'],
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js'),
    enableFindRelatedTests: true,
  },
};
