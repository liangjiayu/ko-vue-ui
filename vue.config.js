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
};
