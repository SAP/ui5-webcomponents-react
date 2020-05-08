module.exports = function (api) {
  return {
    presets: [
      [
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
    ],
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
