const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true, // Учитывать ли зависимости из node_modules при build
  publicPath: '/',
  productionSourceMap: false,
  assetsDir: 'assets',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },
})

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
/*module.exports = {
  chainWebpack: (config) => {
    // Disable HTML Generation.
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // Copy all contents of the "static" src directory
    // to the destination's root.
    config.plugin("copy").use(CopyPlugin, [
      {
        patterns: [{ from: "./static", to: "./" }],
      },
    ]);
  },
};*/

    // Я нашел способ обойти это, просто запустив npm i copyfiles -Dи добавив в buildскрипт этот фрагмент:
    // && copyfiles -f ./deploy/*
