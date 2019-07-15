module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard'],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error'
  }
}
