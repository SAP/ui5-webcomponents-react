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
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
      '@babel/plugin-proposal-numeric-separator',
      [
        '@babel/plugin-transform-runtime',
        {
          version: require('@babel/runtime/package.json').version,
          useESModules: api.env('esm')
        }
      ],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
  };
};
