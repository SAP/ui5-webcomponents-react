export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: 'last 2 safari versions, last 2 chrome versions, last 2 edge versions, last 2 firefox versions'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  env: {
    ssr: {
      plugins: [['./babel-plugin-ssr.mjs', { mode: 'ssr' }]]
    },
    client: {
      plugins: [['./babel-plugin-ssr.mjs', { mode: 'client' }]]
    },
    wrapper: {
      plugins: [['./babel-plugin-ssr.mjs', { mode: 'wrapper' }]]
    }
  },
  ignore: ['**/*.test.ts', '**/*.test.tsx', '**/*.cy.ts', '**/*.cy.tsx', '**/CodeGen.tsx']
};
