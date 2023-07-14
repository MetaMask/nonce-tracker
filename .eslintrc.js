module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],
  rules: {
    'jsdoc/check-property-names': 'off',
    'jsdoc/match-description': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-description': 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        'jsdoc/check-indentation': 'off',
        'jsdoc/no-types': 'off',
      },
    },
    {
      files: ['test/**/*.js'],
      extends: ['@metamask/eslint-config-mocha'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
  ignorePatterns: ['!eslintrc.js', 'dist/'],
};
