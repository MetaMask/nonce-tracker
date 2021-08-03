module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
    },
    {
      files: ['test/**/*.js'],
      extends: ['@metamask/eslint-config-mocha'],
    },
  ],
  ignorePatterns: ['!eslintrc.js', 'dist/'],
};
