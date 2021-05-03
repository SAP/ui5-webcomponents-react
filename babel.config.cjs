module.exports = function (api) {
  return {
    presets: [
      api.env('test') && [
        // ES features necessary for user's Node version
        require('@babel/preset-env').default,
        {
          targets: {
            node: 'current'
          }
        }
      ],
      !api.env('test') && [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ].filter(Boolean),
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          version: require('@babel/runtime/package.json').version,
          useESModules: api.env('esm')
        }
      ]
    ]
  };
};
