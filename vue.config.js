const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查

  // 配置代理服务器方式一 : 缺点： 只能向一个服务器发请求 不能绑定多个服务器
  // devServer: {
  //   proxy: 'http://localhost:5000' 
  // }

  // 配置代理服务器方式二 更加灵活 可以配置多个代理 并且可以配置前缀以让每次请求都发送给服务器 而不是有相同资源时直接从本地拿
  devServer: {
    proxy: {
      // api 为前缀
      '/api1': {
        // 具体的路径 注意这里要 写真服务器的 请求路径 因为是代理服务器帮我们向真服务器发请求
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api1': '' },  // 表示找到所有包含/api1 的路径并去除 这个前缀再发请求
      },
      // api 为前缀
      '/api2': {
        // 具体的路径 注意这里要 写真服务器的 请求路径 因为是代理服务器帮我们向真服务器发请求
        target: 'http://localhost:5001',
        // 如果跟后端服务器发请求时 那边的服务器带了前缀 就可以让 我这里配置的前缀和后端一样 也不需要配置正则了
        // 但是如果 后端服务器 没配路径前缀 就需要用 一个配置项 在代理服务器真正跟后端服务器发请求是去除掉 前缀 
        // 这个前缀必须得加 因为只有这样 代理服务器就会优先发请求 而不是优先在本地找
        pathRewrite: { '^/api2': '' },  // 表示找到所有包含/api2 的路径并去除 这个前缀再发请求
        ws: true,
        changeOrigin: true
      },
    }
  }
})
