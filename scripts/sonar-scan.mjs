import scanner from 'sonarqube-scanner';

scanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || 'http://localhost:9000',
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': 'pinnate',
      'sonar.projectName': 'Pinnate',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': '**/*.test.ts,**/*.test.tsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit(),
);

