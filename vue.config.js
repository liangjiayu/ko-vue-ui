module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },

  css: {
    loaderOptions: {
      scss: {
        // scss 全局共享的属性和方法
        prependData: `@import "src/style/mixins/var.scss";`,
      },
    },
  },

  chainWebpack(config) {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('raw-loader')
      .loader('raw-loader')
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({})
      .end();
  },
};
