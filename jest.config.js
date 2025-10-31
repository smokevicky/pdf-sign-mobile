module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@pages$': '<rootDir>/src/components/pages/index.ts',
    '^@pages/(.*)$': '<rootDir>/src/components/pages/$1',
    '^@atoms$': '<rootDir>/src/components/atoms/index.ts',
    '^@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@molecules$': '<rootDir>/src/components/molecules/index.ts',
    '^@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@store$': '<rootDir>/src/store/index.ts',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
  },
};
