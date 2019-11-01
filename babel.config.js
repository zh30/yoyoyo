module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11"
        },
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    "@babel/typescript"
  ];
  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ];

  return {
    presets,
    plugins
  };
};
