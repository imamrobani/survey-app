module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@root': '.',
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@const': './src/const'
        }
      }
    ]
  ]
};
