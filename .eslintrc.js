module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': ['warn', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn', 'never']
  }
};
