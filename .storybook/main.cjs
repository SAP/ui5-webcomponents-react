const path = require('path');
const root = path.resolve(__dirname, '..');

const addons = [
    '@storybook/addon-essentials'
];

if (process.env.NODE_ENV === 'development') {
    addons.push('@storybook/addon-a11y');
}

module.exports = {
    stories: ['../docs/**/*.stories.mdx', '../packages/**/*.stories.@(tsx|jsx|mdx)'],
    addons: addons,
    webpack: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@shared': path.join(root, 'shared'),
            '@ui5/webcomponents-react/dist/assets/i18n': path.join(root, 'packages', 'main', 'dist', 'assets', 'i18n'),
            '@ui5/webcomponents-react/dist/Assets': path.join(root, 'packages', 'main', 'dist', 'Assets'),
            '@ui5/webcomponents-react': path.join(root, 'packages', 'main', 'src'),
            '@ui5/webcomponents-react-charts': path.join(root, 'packages', 'charts', 'src'),
            '@ui5/webcomponents-react-base/types': path.join(root, 'packages', 'base', 'types'),
            '@ui5/webcomponents-react-base': path.join(root, 'packages', 'base', 'src')
        };
        return config;
    },
    features: {
        postcss: false,
    },
};
