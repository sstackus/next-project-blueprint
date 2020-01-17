/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

function cwd(...fragments) {
  return path.resolve(__dirname, ...fragments);
}

module.exports = withCss(withSass({
  target: 'server',
  webpack(config, { webpack, dev }) {
    dotenv.config({ path: `config/${process.env.NODE_ENV}.env` });

    config.resolve.alias['@/images'] = cwd('public', 'images');
    config.resolve.alias['@'] = cwd('src');

    config.plugins.push(
      new webpack.EnvironmentPlugin(Object.keys(process.env)),
    );

    config.resolve.plugins.push(
      new DirectoryNamedWebpackPlugin(true),
    );

    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack',
      options: { icon: true },
    });

    config.module.rules.push({
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: [cwd('node_modules'), cwd('.next')],
      enforce: 'pre',
      options: {
        emitWarning: dev,
      },
    });

    return config;
  },
  sassLoaderOptions: {
    includePaths: [cwd('node_modules'), cwd('src')],
  },
  publicRuntimeConfig: {
    THEME_COLOR: '#fff',
  },
}));
