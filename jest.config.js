module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@((module|container|utils|store|api|request).*)$': '<rootDir>/src/$1',
  },
}
