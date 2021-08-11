module.exports = {
  // Simula o DOM do browser p/ executar os testes
  testEnvironment: 'jsdom',

  // Ignora certas pastas para não ficar olhando
  testPathIgnorePatterns: ['/node_modules', '/.next'],

  // Carregar informações de configurações antes de executar os testes
  // Será carregado as funcionalidades Testin-libray do JESTDOM
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.ts'],

  // Converte o código utilizando Babel p/ que o JEST entenda
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },

  // Mapeia os arquivos CSS Module para que seja entendível no JEST
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },

  // Teste cobertura p/ verificar se esta cobrindo toda aplicação
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
};
