module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'sort-imports-es6-autofix'],
  extends: [
    'eslint:recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'prettier/prettier': 'error',
  },
};
