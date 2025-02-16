// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    config => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify')
        };
        return config;
    }
);
