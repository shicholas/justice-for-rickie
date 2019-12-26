module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'jest'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 80 }],
    'quotes': [2, 'single'],
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'semi': ["error", "always"],
    'sort-imports': 'error',
    'sort-keys': 'error',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    "jest/globals": true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
