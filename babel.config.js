module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowlist: ['AUTH0_DOMAIN', 'AUTH0_CLIENT_ID'],
      safe: false,
      allowUndefined: true,
    }],
  ],
};