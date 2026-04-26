module.exports = {
  all: true,
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['src/**/*.d.ts', 'cypress/**', 'node_modules/**'],
  reporter: ['text', 'text-summary', 'html'],
  'report-dir': 'coverage',
  'check-coverage': true,
  lines: 100,
  statements: 100,
  functions: 100,
  branches: 100,
}
