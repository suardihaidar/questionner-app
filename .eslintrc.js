module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: './src',
        rootPathPrefix: '@/',
      },
    },
  },
  rules: {
    'react-native/no-inline-styles': 0,
  },
};
