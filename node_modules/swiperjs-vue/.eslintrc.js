const rules = {
  'no-param-reassign': 'off',
  'no-underscore-dangle': 'off',
  'prefer-object-spread': 'off',
  'prefer-destructuring': 'off',
  'import/prefer-default-export': 'off',
  'guard-for-in': 'off',
  'no-restricted-syntax': 'off',
  'import/no-extraneous-dependencies': 'off',
  'no-console': 'off',
  'no-restricted-globals': ['error', 'window', 'document'],
  'jsx-a11y/label-has-associated-control': 'off',
  'import/no-unresolved': [2, { ignore: ['ssr-window', 'dom7', 'swiper'] }],
};
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
      rules,
    },
    {
      files: ['cypress/**/*.jsx', 'cypress/**/*.js'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      env: {
        'cypress/globals': true,
      },
    },
    {
      files: ['src/**/*.*'],
      rules: {
        ...rules,
        'import/extensions': [2, { js: 'always' }],
      },
    },
  ],
};
