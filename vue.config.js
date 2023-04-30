const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  devServer: {
    port: 8081,
    proxy: {
      '/sendMsg': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/sendMsg': ''
        // }
      }
    }
  },
  transpileDependencies: true
})
