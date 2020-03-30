module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: [
      'error',
      'double',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'no-trailing-spaces': true,
  },
};
