module.exports = {
  proxy: {
    '/api': {
      target: 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': ''   //需要rewrite的,
      }
    }
  }
}
