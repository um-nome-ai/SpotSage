[
  'babel-plugin-inline-import',
  {
    extensions: ['.svg'],
  }
],
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
