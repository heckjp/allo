const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:{
      '^/api': {

      target: 'http://localhost:3000',

      changeOrigin: true,

      secure:false,

      pathRewrite: {'^/api': ''},

      logLevel: 'debug'
      },
  }
  }
})
