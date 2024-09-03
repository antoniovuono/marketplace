module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@constants': './src/constants',
            '@services': './src/services',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@navigators': './src/navigators',
          },
        },
      ],
    ],
  }
}
