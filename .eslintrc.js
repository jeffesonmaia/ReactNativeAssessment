module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': [1, { 'allow': ['warn', 'error'] }],
    'arrow-parens': [2, 'as-needed'],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': [0, 'always'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-fragments': [0, 'element'],
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 1 }],
    'no-plusplus': 0,
    'import/no-unresolved': 0,
    'semi': [
      'error',
      'never'
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': [
      'error',
      {
        'code': 80,
        'ignoreUrls': true,
        'ignoreStrings': true
      }
    ],
    'import/no-cycle': 0,
    'singleline': 0
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
