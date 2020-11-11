const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '@/',
  rootPathSuffix: './src',
};

module.exports = (api) => {
  api.cache(true);
  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [['babel-plugin-root-import', rootImportOpts]];

  return {plugins, presets};
};
